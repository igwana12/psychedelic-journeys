"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface JourneyHeroProps {
  name: string;
  type: string;
  location: string;
  heroImage: string;
  slug: string;
  nextSlug: string;
}

/**
 * Atmospheric hero: parallax image + tint + mist + fireflies + kinetic
 * gradient wordmark. Content is real DOM (SSR/SEO/CLS-safe); GSAP only animates
 * transform/opacity after hydration and no-ops under reduced-motion.
 */
export default function JourneyHero({ name, type, location, heroImage, slug, nextSlug }: JourneyHeroProps) {
  const root = useRef<HTMLElement>(null);
  const letters = name.split("");

  useGSAP(
    () => {
      const cv = root.current?.querySelector<HTMLCanvasElement>(".hero__fireflies");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".wordmark span", { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.07, delay: 0.2 });
        gsap.from(".hero__nav, .loc, .badge", { y: 24, autoAlpha: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.55 });

        gsap.utils.toArray<HTMLElement>("[data-depth]").forEach((el) => {
          gsap.to(el, {
            yPercent: parseFloat(el.dataset.depth!) * 30,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
          });
        });

        const hero = root.current!;
        const onMove = (e: PointerEvent) => {
          const rx = e.clientX / window.innerWidth - 0.5;
          const ry = e.clientY / window.innerHeight - 0.5;
          gsap.to(".hero__img", { x: rx * -24, y: ry * -16, duration: 0.8, ease: "power2.out" });
          gsap.to(".hero__mist", { x: rx * 30, y: ry * 18, duration: 1.2, ease: "power2.out" });
        };
        hero.addEventListener("pointermove", onMove);
        gsap.to(".hero__mist", { xPercent: 6, yPercent: -4, duration: 14, ease: "sine.inOut", repeat: -1, yoyo: true });
        return () => hero.removeEventListener("pointermove", onMove);
      });

      // fireflies
      if (!reduce && cv) {
        const ctx = cv.getContext("2d")!;
        let W = 0, H = 0, parts: any[] = [], raf = 0;
        const resize = () => {
          W = cv.width = cv.offsetWidth;
          H = cv.height = cv.offsetHeight;
          parts = Array.from({ length: Math.min(46, Math.round((W * H) / 34000)) }, () => ({
            x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + 0.4,
            vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
            a: Math.random(), as: Math.random() * 0.02 + 0.006,
          }));
        };
        resize();
        window.addEventListener("resize", resize);
        const loop = () => {
          ctx.clearRect(0, 0, W, H);
          for (const p of parts) {
            p.x += p.vx; p.y += p.vy; p.a += p.as;
            if (p.a > 1 || p.a < 0) p.as *= -1;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
            g.addColorStop(0, `rgba(252,211,77,${0.55 * p.a})`);
            g.addColorStop(1, "rgba(252,211,77,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 6, 0, 7);
            ctx.fill();
          }
          raf = requestAnimationFrame(loop);
        };
        loop();
        return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="hero-atmos">
      <div className="hero__layer hero__img" data-depth="0.25" style={{ backgroundImage: `url('${heroImage}')` }} />
      <div className="hero__tint" />
      <div className="hero__mist" data-depth="0.5" />
      <canvas className="hero__fireflies" />
      <div className="hero__topscrim" />
      <div className="hero__grad" />
      <div className="hero__vignette" />

      <div className="hero__content" data-depth="-0.1">
        <div className="hero__nav">
          <Link href={`/journeys?journey=${slug}`}>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            ALL JOURNEYS
          </Link>
          <Link className="next" href={`/journeys/${nextSlug}`}>
            NEXT
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
        <h1 className="wordmark" aria-label={name}>
          {letters.map((ch, i) => (
            <span key={i} aria-hidden="true">{ch}</span>
          ))}
        </h1>
        <p className="loc">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          {location}
        </p>
        <div className="badge badge--below">{type}</div>
      </div>
      <div className="scrollcue">SCROLL<div className="track" /></div>
    </section>
  );
}
