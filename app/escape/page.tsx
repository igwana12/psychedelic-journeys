import Link from "next/link";

/**
 * ESCAPE — the manifesto (handoff §6).
 *
 * Cream page. Ink header band with the stacked display title in yellow. Each
 * section is an ink header band + .tape--warm + a reading panel, flush-left at
 * 68ch. One pull quote per section, alternating side. A .torn colour block
 * before the footer.
 *
 * Hot ink: red. Cool ink: teal (one of each per page, §8).
 *
 * ALL long-form copy is the client's and is reproduced verbatim (§5) — only
 * headings, kickers and labels are restyled. The old page centred its
 * paragraphs and used rounded panels; both are gone (§6.4).
 */

const PRACTICES = [
  {
    title: "Build Skills",
    body: "Remote-friendly skills: coding, writing, design, marketing, consulting. Pick one, get good enough to charge money.",
  },
  {
    title: "Reduce Expenses",
    body: "Cut the fat. Cancel subscriptions. Sell stuff. Lower your baseline cost of existence. Freedom has a price, and it's lower than you think.",
  },
  {
    title: "Test the Waters",
    body: "Take a 2-week trip somewhere cheap. Feel what it's like to live on $30/day in Thailand or Mexico. Make it real before you commit.",
  },
  {
    title: "Commit to the Leap",
    body: "Set a date. Buy a one-way ticket. Burn the safety net. Not recklessly, but decisively. Hesitation kills more dreams than failure.",
  },
];

const WISDOM = [
  "Start with SEA (Southeast Asia) or Latin America—low cost, good infrastructure, established expat communities",
  "You need less money than you think—$1,000-1,500/month covers living expenses in most places",
  "Remote work beats passive income for most people—it's more reliable and faster to establish",
  "Learn basic tax obligations—you're still subject to your home country's laws even abroad",
  "Slow travel beats fast travel—stay 1-3 months per place to actually live, not just visit",
  "Join digital nomad communities online before you go—Reddit, Facebook groups, Nomad List",
  "Health insurance matters—look into SafetyWing or similar nomad-specific coverage",
  "The hardest part is the decision, not the execution—once you commit, the path appears",
];

/** An ink header band above every reading panel. */
function SectionBand({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ background: "var(--ink)", padding: "11px 16px" }}>
        <h2
          className="head-m"
          style={{ color: "var(--yellow)", fontSize: "clamp(20px, 3vw, 30px)" }}
        >
          {children}
        </h2>
      </div>
      <div className="tape tape--warm" style={{ height: 8 }} aria-hidden="true" />
    </>
  );
}

/** Reading panel: 3px ink keyline, card ground, flush-left copy at 68ch. */
function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "3px solid var(--ink)", borderTop: 0, background: "var(--card)", padding: 16 }}>
      {children}
    </div>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 16.5,
        lineHeight: 1.62,
        maxWidth: "68ch",
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

/** Pull quote: yellow ground, ink keyline, Alfa Slab, a sun bleeding off the corner. */
function PullQuote({ children, side = "left", sun = false }: { children: React.ReactNode; side?: "left" | "right"; sun?: boolean }) {
  return (
    <figure
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--yellow)",
        border: "3px solid var(--ink)",
        padding: "22px 24px",
        margin: "26px 0",
        marginLeft: side === "right" ? "auto" : 0,
        maxWidth: "min(46ch, 100%)",
      }}
    >
      {/* One sun per PAGE, not per quote (§9) — so it is opt-in and only the
          first quote lights it. */}
      {sun && (
        <div
          className="sun"
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 190,
            height: 190,
            right: -70,
            bottom: -90,
            opacity: 0.55,
            zIndex: 0,
          }}
        />
      )}
      <blockquote
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(20px, 2.4vw, 26px)",
          lineHeight: 1.1,
          color: "var(--ink)",
        }}
      >
        {children}
      </blockquote>
      <figcaption
        className="stamp-label"
        style={{ position: "relative", zIndex: 1, marginTop: 12, color: "var(--red-deep)" }}
      >
        Oddysseys
      </figcaption>
    </figure>
  );
}

export default function EscapePage() {
  return (
    <div className="poster" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      {/* ── TITLE BAND ─────────────────────────────────────────────────── */}
      <header style={{ background: "var(--ink)", position: "relative", overflow: "hidden" }}>
        <div
          className="halftone"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, opacity: 0.12 }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "clamp(36px, 6vw, 68px) clamp(20px, 5vw, 48px)",
          }}
        >
          <p
            style={{
              display: "inline-block",
              background: "var(--red-deep)",
              color: "var(--paper)",
              fontFamily: "var(--font-stamp)",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "7px 11px",
            }}
          >
            Manifesto
          </p>
          <h1
            className="display-xl"
            style={{ color: "var(--yellow)", marginTop: 18, textShadow: "4px 4px 0 var(--red-deep)" }}
          >
            ESCAPE
            <br />
            THE SYSTEM
          </h1>
          <p
            className="lead"
            style={{ color: "var(--paper)", marginTop: 20, maxWidth: "46ch" }}
          >
            The realization that the script you were handed—9-5, mortgage,
            retirement—doesn&apos;t have to be your story.
          </p>
        </div>
      </header>
      <div className="tape" aria-hidden="true" />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(30px, 5vw, 56px) clamp(20px, 5vw, 48px) clamp(40px, 6vw, 72px)",
        }}
      >
        {/* ── THE GREAT UNRAVELING ────────────────────────────────────── */}
        <section style={{ marginBottom: 44 }}>
          <SectionBand>The Great Unraveling</SectionBand>
          <Panel>
            <Para>
              You sit in your cubicle, or your corner office, or your remote work setup, and
              something clicks. This isn&apos;t living—it&apos;s performing a role someone
              else wrote. The career ladder, the status symbols, the deferred happiness... it
              all starts to look like an elaborate illusion.
            </Para>
            <PullQuote sun>They were wrong about that too.</PullQuote>
            <Para>
              The psychedelic experience shows you that reality is far more fluid than
              you&apos;ve been told. If consciousness itself is malleable, why should your life
              circumstances be fixed? The same society that told you &quot;this is just how
              things are&quot; also said plants couldn&apos;t show you the nature of existence.
              They were wrong about that too.
            </Para>
            <Para>
              Escaping the system isn&apos;t about rejecting work or responsibility. It&apos;s
              about rejecting the artificial constraints on how, where, and why you work.
              It&apos;s about designing a life that serves your growth rather than someone
              else&apos;s bottom line.
            </Para>
          </Panel>
        </section>

        {/* ── THE DIGITAL NOMAD PATH ──────────────────────────────────── */}
        <section style={{ marginBottom: 44 }}>
          <SectionBand>The Digital Nomad Path</SectionBand>
          <Panel>
            <Para>
              The internet made location independence possible. Crypto made it practical. You
              can earn in dollars or Bitcoin, spend in pesos or baht, and live in places where
              your money stretches 3-5x further. Not as a perpetual vacation, but as a
              sustainable way of life.
            </Para>
            <PullQuote side="right">
              You&apos;re running toward a life that actually fits your values.
            </PullQuote>
            <Para>
              Southeast Asia, Latin America, Eastern Europe—these regions offer rich cultures,
              low costs, and growing communities of people who&apos;ve made the same leap.
              You&apos;re not running away from something; you&apos;re running toward a life
              that actually fits your values.
            </Para>
            <Para>
              The skills you need are learnable: remote work (writing, design, development,
              consulting), freelancing platforms, basic financial literacy, and the courage to
              start before you feel ready. Thousands have done it. You can too.
            </Para>
          </Panel>
        </section>

        {/* ── ESSENTIAL PRACTICES — numbered cards, not a rounded grid ── */}
        <section style={{ marginBottom: 44 }}>
          <SectionBand>Essential Practices</SectionBand>
          <div
            className="practice-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
              border: "3px solid var(--ink)",
              borderTop: 0,
              background: "var(--paper-dim)",
              padding: 18,
            }}
          >
            {PRACTICES.map((p, i) => (
              <div
                key={p.title}
                style={{
                  position: "relative",
                  background: "var(--card)",
                  border: "3px solid var(--ink)",
                  boxShadow: "6px 6px 0 var(--ink)",
                  padding: "18px 16px 16px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -12,
                    left: -12,
                    width: 36,
                    height: 36,
                    display: "grid",
                    placeItems: "center",
                    background: "var(--teal)",
                    border: "3px solid var(--ink)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="head-s"
                  style={{ marginBottom: 8, marginTop: 4, fontSize: 16 }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRACTICAL WISDOM — an index list, not bullets ───────────── */}
        <section style={{ marginBottom: 44 }}>
          <SectionBand>Practical Wisdom</SectionBand>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              border: "3px solid var(--ink)",
              borderTop: 0,
              background: "var(--card)",
            }}
          >
            {WISDOM.map((w, i) => (
              <li
                key={w}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                  padding: "13px 16px",
                  borderBottom: i === WISDOM.length - 1 ? 0 : "2px solid var(--ink)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    color: "var(--red-deep)",
                    minWidth: "1.6em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: 1.55,
                    maxWidth: "68ch",
                  }}
                >
                  {w}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── THE TRUTH — the closing block, torn at the foot ─────────── */}
        <section>
          <div
            className="torn"
            style={{
              background: "var(--red-deep)",
              padding: "clamp(26px, 4vw, 44px) clamp(20px, 4vw, 40px) clamp(60px, 8vw, 96px)",
            }}
          >
            <h2 className="head-m" style={{ color: "var(--yellow)", marginBottom: 14 }}>
              The Truth
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.62,
                color: "var(--paper)",
                maxWidth: "68ch",
              }}
            >
              The system doesn&apos;t break when you leave it. It just continues without you.
              And you? You get to build something that&apos;s actually yours. The question
              isn&apos;t whether it&apos;s possible—thousands prove it is every day. The
              question is whether you&apos;re willing to trade comfort for freedom.
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: 1.1,
                color: "var(--yellow)",
                marginTop: 20,
                maxWidth: "24ch",
              }}
            >
              The door is open. You just have to walk through it.
            </p>
          </div>

          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Link href="/journeys" className="btn-poster btn-poster--primary">
              Explore journeys
            </Link>
            <Link href="/" className="btn-poster btn-poster--secondary">
              Back to the front
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
