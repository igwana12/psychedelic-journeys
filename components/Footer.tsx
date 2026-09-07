/**
 * Disclaimer band (handoff §4). Full-bleed ink footer: a .barcode rule above,
 * a 32px red clip-path star, label in Archivo Black yellow uppercase, copy in
 * paper-dim 14px/1.55 flush-left at 84ch max.
 *
 * The copy is the client's and is kept verbatim (§5). It used to be centred —
 * un-centred here per §4.
 */
export default function Footer() {
  return (
    <footer>
      <div className="barcode" aria-hidden="true" />
      <div style={{ background: "var(--ink)", padding: "clamp(24px, 4vw, 40px) 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 48px)",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "none",
              width: 32,
              height: 32,
              background: "var(--red)",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 15,
                textTransform: "uppercase",
                color: "var(--yellow)",
                marginBottom: 10,
              }}
            >
              Disclaimer
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--paper-dim)",
                maxWidth: "84ch",
              }}
            >
              This website is for informational and educational purposes only. The content
              shared here represents personal experiences and perspectives. We do not
              encourage or condone illegal activities. Always research local laws and
              regulations, consult with healthcare professionals, and exercise caution when
              considering any transformative experiences. Individual results may vary, and
              what works for one person may not work for another.
            </p>
            <p
              style={{
                fontFamily: "var(--font-stamp)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted-dark)",
                marginTop: 16,
              }}
            >
              © {new Date().getFullYear()} Oddysseys. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
