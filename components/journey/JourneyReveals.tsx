"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Wraps a server-rendered subtree and reveals any `.reveal` descendants on
 * scroll (stats, rituals, tips, section headings, CTA). One instance near the
 * page root covers everything below the hero/story, which own their own reveals.
 * Reduced-motion-safe: content is visible by default; only the animation is gated.
 */
export default function JourneyReveals({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
        });
        gsap.utils.toArray<HTMLElement>(".cta__bg[data-depth]").forEach((el) => {
          gsap.to(el, { yPercent: 12, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    },
    { scope: root }
  );
  return <div ref={root}>{children}</div>;
}
