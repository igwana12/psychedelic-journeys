import Link from "next/link";
import { journeysData } from "@/data/journeys";
import Ticker from "@/components/poster/Ticker";
import JourneyCard from "@/components/poster/JourneyCard";

/**
 * HOME (handoff §6). Cream poster hero on yellow, ink tape, red ticker, then
 * the dark full-bleed filmstrip. The page is paper; only the filmstrip and the
 * footer band invert to ink.
 *
 * Hot ink: yellow. Cool ink: none (one hot + at most one cool per page, §8).
 */
export default function Home() {
  const journeys = Object.values(journeysData);
  // Derived, never hardcoded: the data holds 13 journeys while the old nav
  // listed 14 (it carried a Tulum entry with no data behind it).
  const count = journeys.length;

  return (
    <div className="poster" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--yellow)",
          overflow: "hidden",
          borderBottom: "4px solid var(--ink)",
        }}
      >
        {/* one sun per page, behind content, never under body copy */}
        <div
          className="sun"
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "min(46vw, 420px)",
            height: "min(46vw, 420px)",
            left: "-9%",
            bottom: "-24%",
            opacity: 0.5,
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(40px, 7vw, 84px) clamp(20px, 5vw, 48px)",
            display: "grid",
            gap: "clamp(28px, 5vw, 56px)",
            gridTemplateColumns: "1fr",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <p
              style={{
                display: "inline-block",
                background: "var(--ink)",
                color: "var(--yellow)",
                fontFamily: "var(--font-stamp)",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "7px 11px",
              }}
            >
              Psychedelic Journeys
            </p>

            <h1
              className="display-xl"
              style={{ color: "var(--red)", margin: "18px 0 0" }}
            >
              ODDY
              <br />
              SSEYS
            </h1>

            <p className="lead" style={{ marginTop: 22 }}>
              Sacred stories from the edge of consciousness. Ancient ceremonies, modern
              festivals, and transformative experiences from around the world.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 30 }}>
              <Link href="/journeys" className="btn-poster btn-poster--primary">
                Explore journeys
              </Link>
              <Link href="/escape" className="btn-poster btn-poster--secondary">
                Escape the system
              </Link>
            </div>
          </div>

          {/* hero photo — 4:5 frame, 4px ink keyline, hard offset, stamp overlapping */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                border: "4px solid var(--ink)",
                boxShadow: "10px 10px 0 var(--ink)",
                overflow: "hidden",
                background: "var(--paper-dim)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-cosmic.png"
                alt="A ceremony at the edge of consciousness"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* The stamp duplicates the count stated in the section meta below,
                so a rotated element is never the only carrier (§7). */}
            <span
              className="stamp"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -14,
                right: -10,
                background: "var(--paper)",
              }}
            >
              {count} journeys
            </span>
          </div>
        </div>
      </section>

      <div className="tape tape--ink" aria-hidden="true" />

      <Ticker items={journeys.map((j) => j.name.trim())} />

      {/* ── SECTION HEADER (on paper) ──────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(38px, 6vw, 64px) clamp(20px, 5vw, 48px) 22px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 14,
            borderBottom: "4px solid var(--ink)",
            paddingBottom: 14,
          }}
        >
          <h2 className="display-l" style={{ color: "var(--ink)", textShadow: "none" }}>
            The Journeys
          </h2>
          <p className="stamp-label" style={{ color: "var(--red-deep)" }}>
            {count} stops · five continents · drag it
          </p>
        </div>
      </div>

      {/* ── FILMSTRIP (the only inverted block) ────────────────────────── */}
      <section
        style={{ background: "var(--ink)", padding: "clamp(28px, 5vw, 48px) 0" }}
      >
        <div
          className="filmstrip"
          tabIndex={0}
          role="region"
          aria-label="Journeys, a horizontally scrolling filmstrip"
          style={{
            display: "flex",
            gap: 22,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "20px clamp(20px, 5vw, 48px) 26px",
          }}
        >
          {journeys.map((j, i) => (
            <JourneyCard key={j.slug} journey={j} index={i} variant="strip" />
          ))}
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "6px clamp(20px, 5vw, 48px) 0",
          }}
        >
          <Link href="/journeys" className="btn-poster btn-poster--primary">
            See all {count}
          </Link>
        </div>
      </section>
    </div>
  );
}
