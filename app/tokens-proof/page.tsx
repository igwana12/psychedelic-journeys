/**
 * Token + motif proof sheet (handoff §1–§3). Not a route in the sitemap —
 * a bench for verifying the poster layer renders before any real route is
 * converted. Delete once /, /journeys and /escape are done.
 */
export default function TokenProof() {
  const hot = [
    ["--yellow", "#FFD400", "bemba"],
    ["--red", "#E02B1D", "poster · display grounds only"],
    ["--red-deep", "#B01B10", "poster deep · small text on red"],
    ["--coral", "#F86B5C", "coral · mono on ink"],
  ];
  const cool = [
    ["--teal", "#1E9E8E", "havana"],
    ["--blue", "#2B4FA8", "crayon"],
    ["--green", "#4E9A3E", "field"],
  ];
  const ground = [
    ["--paper", "#F4EAD5", "page"],
    ["--paper-dim", "#E3D5B8", "recessed"],
    ["--card", "#FFFFFF", "card"],
    ["--ink", "#14100D", "keylines + body"],
    ["--ink-soft", "#2A2420", "filmstrip cards"],
  ];

  return (
    <div className="poster" style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      <div className="tape" aria-hidden="true" />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        <p className="stamp-label" style={{ background: "var(--ink)", color: "var(--yellow)", display: "inline-block", padding: "6px 10px" }}>
          Design language v1
        </p>
        <h1 className="display-xl" style={{ color: "var(--red)", marginTop: 16 }}>
          ODDY<br />SSEYS
        </h1>
        <p className="lead" style={{ marginTop: 20 }}>
          Token and motif proof. Every value below comes from the handoff. Nothing here is a route.
        </p>

        <h2 className="head-m" style={{ marginTop: 56, marginBottom: 16 }}>Ground</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {ground.map(([tok, hex, use]) => (
            <div key={tok} style={{ border: "3px solid var(--ink)", background: "var(--card)" }}>
              <div style={{ height: 72, background: hex, borderBottom: "3px solid var(--ink)" }} />
              <div style={{ padding: 10 }}>
                <div className="stamp-label">{hex}</div>
                <div className="stamp-label" style={{ color: "var(--muted)", fontSize: 10.5 }}>{use}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="head-m" style={{ marginTop: 48, marginBottom: 16 }}>Hot inks — one per page</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {hot.map(([tok, hex, use]) => (
            <div key={tok} style={{ border: "3px solid var(--ink)", background: "var(--card)" }}>
              <div style={{ height: 72, background: hex, borderBottom: "3px solid var(--ink)" }} />
              <div style={{ padding: 10 }}>
                <div className="stamp-label">{hex}</div>
                <div className="stamp-label" style={{ color: "var(--muted)", fontSize: 10.5 }}>{use}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="head-m" style={{ marginTop: 48, marginBottom: 16 }}>Cool inks — one per page</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {cool.map(([tok, hex, use]) => (
            <div key={tok} style={{ border: "3px solid var(--ink)", background: "var(--card)" }}>
              <div style={{ height: 72, background: hex, borderBottom: "3px solid var(--ink)" }} />
              <div style={{ padding: 10 }}>
                <div className="stamp-label">{hex}</div>
                <div className="stamp-label" style={{ color: "var(--muted)", fontSize: 10.5 }}>{use}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="head-m" style={{ marginTop: 48, marginBottom: 16 }}>Type scale</h2>
        <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 22 }}>
          <div className="display-l" style={{ color: "var(--red)" }}>Display L — Alfa Slab</div>
          <div className="head-m" style={{ marginTop: 22 }}>Head M — The Great Unraveling</div>
          <div className="head-s" style={{ marginTop: 14 }}>Head S — Explore journeys</div>
          <p className="lead" style={{ marginTop: 18 }}>
            Lead, Archivo 500 at 21px. Capped at 42 characters so it breaks like a poster deck.
          </p>
          <p className="body-copy" style={{ marginTop: 14 }}>
            Body copy, Archivo 400 at 17px on 1.62. Flush left, capped at 68 characters. Nothing in
            this system is centred except a single-line ticker, and reading copy never drops below
            fifteen pixels.
          </p>
          <div className="stamp-label" style={{ marginTop: 16, color: "var(--muted)" }}>
            Stamp — Himachal Pradesh, India
          </div>
        </div>

        <h2 className="head-m" style={{ marginTop: 48, marginBottom: 16 }}>Motifs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 16 }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Tape</div>
            <div className="tape" aria-hidden="true" />
            <div className="tape tape--warm" style={{ marginTop: 8 }} aria-hidden="true" />
            <div className="tape tape--ink" style={{ marginTop: 8 }} aria-hidden="true" />
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--yellow)", padding: 16 }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Halftone on flat colour</div>
            <div className="halftone" style={{ height: 76, border: "3px solid var(--ink)" }} aria-hidden="true" />
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 16, position: "relative", overflow: "hidden" }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Sun — 75s, one per page</div>
            <div className="sun" style={{ position: "absolute", width: 190, height: 190, right: -60, bottom: -70, opacity: 0.55 }} aria-hidden="true" />
            <div style={{ height: 76 }} />
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 16 }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Torn edge</div>
            <div className="torn" style={{ height: 76, background: "var(--red)" }} aria-hidden="true" />
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 16 }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Barcode</div>
            <div className="barcode" aria-hidden="true" />
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--card)", padding: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
            <span className="stamp">14 journeys</span>
            <span className="stamp" style={{ transform: "rotate(5deg)" }}>Est. 2026</span>
          </div>

          <div style={{ border: "3px solid var(--ink)", background: "var(--paper-dim)", padding: 16, position: "relative" }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Scrawl ring on a photo frame</div>
            <div className="halftone" style={{ height: 120, border: "3px solid var(--ink)", position: "relative" }}>
              <div className="scrawl-ring" style={{ position: "absolute", inset: "18% 12% auto auto", width: 92, height: 66 }} aria-hidden="true" />
            </div>
          </div>

          <div style={{ padding: 16 }}>
            <div className="stamp-label" style={{ marginBottom: 10 }}>Print offset — the only shadow</div>
            <div className="offset" style={{ height: 76, border: "3px solid var(--ink)", background: "var(--yellow)" }} />
          </div>
        </div>

        <h2 className="head-m" style={{ marginTop: 48, marginBottom: 16 }}>Buttons</h2>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <button className="btn-poster btn-poster--primary">Explore journeys</button>
          <button className="btn-poster btn-poster--secondary">Escape the system</button>
          <button className="btn-poster btn-poster--ghost">Read the story</button>
        </div>
      </div>

      <div className="barcode" aria-hidden="true" />
    </div>
  );
}
