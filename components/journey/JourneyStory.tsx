"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface StorySection {
  title: string;
  content: string;
}

/**
 * Renders the story[] beats as alternating editorial chapters with a progress
 * spine, scroll-reveal, and ken-burns image parallax. Images are drawn from the
 * journey gallery so every journey has media without extra data. All content is
 * SSR-rendered; animation is additive and reduced-motion-safe.
 */
export default function JourneyStory({ story, gallery }: { story: StorySection[]; gallery: string[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
        gsap.utils.toArray<HTMLElement>("[data-kb]").forEach((img) => {
          gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      {story.map((section, i) => {
        const img = gallery[i % gallery.length];
        return (
          <article key={i} className="chapter chapter--media">
            <div className="chapter__spine" />
            <div className="chapter__grid">
              <div>
                <div className="chapter__eyebrow reveal">Chapter {String(i + 1).padStart(2, "0")}</div>
                <h3 className="reveal">{section.title}</h3>
                <p className="reveal">{section.content}</p>
              </div>
              {img && (
                <div className="chapter__media reveal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={section.title} data-kb />
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
