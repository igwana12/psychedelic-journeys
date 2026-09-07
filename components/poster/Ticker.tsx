/**
 * Ticker (handoff §4) — replaces the 14 dot-labels under the old carousel.
 * bg ink, mono 12px 0.22em yellow (13.4:1 — never yellow on red, which is
 * 3.2:1 and banned at label size). Content is duplicated and the track is
 * width:max-content so the marquee loops seamlessly.
 *
 * Paused on hover and under prefers-reduced-motion (the @media rule lives in
 * globals.css). aria-hidden: every name here also appears as a real link in
 * the filmstrip below, so the ticker is decoration, not the only carrier.
 */
export default function Ticker({ items }: { items: string[] }) {
  const run = items.join("  ·  ");
  return (
    <div
      className="ticker"
      aria-hidden="true"
      style={{ background: "var(--ink)", overflow: "hidden", padding: "10px 0" }}
    >
      <div
        className="ticker__track"
        style={{
          display: "flex",
          gap: "0",
          width: "max-content",
          animation: "marquee 26s linear infinite",
          fontFamily: "var(--font-stamp)",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--yellow)",
        }}
      >
        <span style={{ paddingRight: "2.5rem" }}>{run}</span>
        <span style={{ paddingRight: "2.5rem" }}>{run}</span>
      </div>
    </div>
  );
}
