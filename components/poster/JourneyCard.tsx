import Link from "next/link";
import type { JourneyData } from "@/types/journey";

/**
 * Journey card (handoff §4). Two variants of one structure:
 *
 *  - "strip" (on ink): 3px paper border, ink-soft ground, 8px 8px 0 red offset,
 *    name in yellow, place in coral, blurb in paper-dim.
 *  - "grid"  (on paper): 3px ink border, card ground, 7px 7px 0 ink offset,
 *    name in ink, place in red-deep, blurb in ink.
 *
 * The kind tag stays bg red-deep with paper text in both (5.9:1) — never
 * poster red, which fails at label size (§7).
 *
 * Photos are unfiltered and framed. No scrawl ring — Niko cut it 2026-09-07.
 */
export default function JourneyCard({
  journey,
  index,
  variant = "strip",
}: {
  journey: JourneyData;
  index: number;
  variant?: "strip" | "grid";
}) {
  const onInk = variant === "strip";

  return (
    <Link
      href={`/journeys/${journey.slug}`}
      className={`jcard jcard--${variant}`}
      style={{
        display: "block",
        position: "relative",
        textDecoration: "none",
        border: `3px solid ${onInk ? "var(--paper)" : "var(--ink)"}`,
        background: onInk ? "var(--ink-soft)" : "var(--card)",
        boxShadow: onInk ? "8px 8px 0 var(--red)" : "7px 7px 0 var(--ink)",
        ...(onInk
          ? { flex: "0 0 min(78vw, 300px)", scrollSnapAlign: "center" }
          : {}),
      }}
    >
      {/* photo — 4:3, unfiltered, 3px bottom keyline */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          borderBottom: `3px solid ${onInk ? "var(--paper)" : "var(--ink)"}`,
          background: "var(--paper-dim)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={journey.heroImage}
          alt={`${journey.name}, ${journey.location}`}
          loading={index < 3 ? "eager" : "lazy"}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* No scrawl ring (Niko 2026-09-07: "not sure I like the circle drawn on
            the thumbs"). The photograph carries itself; the collage energy lives
            in the frame furniture — corner tab, index badge, torn kind tag. */}
        {/* index badge — 40px yellow square, hung off the top-left corner */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -10,
            left: -10,
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            background: "var(--yellow)",
            border: "3px solid var(--ink)",
            color: "var(--ink)",
            fontFamily: "var(--font-display)",
            fontSize: 15,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
        <span
          style={{
            alignSelf: "flex-start",
            background: "var(--red-deep)",
            color: "var(--paper)",
            fontFamily: "var(--font-stamp)",
            fontWeight: 600,
            fontSize: 10.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "5px 8px",
          }}
        >
          {journey.type}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            lineHeight: 0.95,
            color: onInk ? "var(--yellow)" : "var(--ink)",
          }}
        >
          {journey.name.trim()}
        </span>
        <span
          style={{
            fontFamily: "var(--font-stamp)",
            fontWeight: 600,
            fontSize: 11.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: onInk ? "var(--coral)" : "var(--red-deep)",
          }}
        >
          {journey.location}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.5,
            color: onInk ? "var(--paper-dim)" : "var(--ink)",
          }}
        >
          {journey.introduction.trim().split(". ")[0]}.
        </span>
      </div>
    </Link>
  );
}
