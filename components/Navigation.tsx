"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header (handoff §4). bg ink, Alfa Slab yellow wordmark left, nav right,
 * 8px .tape--warm below the bar. The wordmark reads ODDYSSEYS — "Psychedelic
 * Journeys" moved to the mono kicker inside the hero (§5).
 *
 * Active nav item: bg yellow, ink text. Inactive: paper text, 2px border at
 * 40% paper. Hit targets ≥ 48px (§7).
 */
export default function Navigation() {
  const pathname = usePathname();
  const items = [
    { href: "/journeys", label: "Journeys" },
    { href: "/escape", label: "Escape" },
  ];

  return (
    <nav>
      <div style={{ background: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 48px)",
            minHeight: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              color: "var(--yellow)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              display: "inline-flex",
              alignItems: "center",
              minHeight: 48,
            }}
          >
            ODDYSSEYS
          </Link>

          <div style={{ display: "flex", gap: 10 }}>
            {items.map((it) => {
              const active = pathname === it.href || pathname.startsWith(it.href + "/");
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 48,
                    padding: "8px 12px",
                    fontFamily: "var(--font-head)",
                    fontSize: 12.5,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    background: active ? "var(--yellow)" : "transparent",
                    color: active ? "var(--ink)" : "var(--paper)",
                    border: active ? "2px solid var(--yellow)" : "2px solid rgba(244,234,213,0.4)",
                  }}
                >
                  {it.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tape tape--warm" style={{ height: 8 }} aria-hidden="true" />
    </nav>
  );
}
