"use client";

import { useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Wraps journey pages in Lenis smooth-scroll and syncs it to GSAP's ticker so
 * ScrollTrigger stays in lock-step. Children are passed through untouched, so
 * server-rendered content stays server-rendered. Fully disabled under
 * prefers-reduced-motion (native scroll, no rAF loop).
 */
export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.09, wheelMultiplier: 0.9 }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
