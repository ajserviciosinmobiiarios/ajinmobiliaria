import React from "react";

/**
 * Aroa & Jon — PillarCard
 * Editorial numbered feature block. Serif index number in gold, title, body.
 */
export function PillarCard({ index, title, children, tone = "light", divider = true }) {
  const onDark = tone === "dark";
  return (
    <div style={{ paddingTop: divider ? 28 : 0, borderTop: divider ? "1px solid " + (onDark ? "var(--line-on-dark)" : "var(--line-soft)") : "none" }}>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: 34, fontWeight: 500, lineHeight: 1, color: "var(--aj-gold)", marginBottom: 18 }}>
        {index}
      </div>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h3)", fontWeight: 500, lineHeight: 1.2, margin: "0 0 12px", color: onDark ? "var(--text-on-dark)" : "var(--text-heading)" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, margin: 0, color: onDark ? "var(--text-on-dark-muted)" : "var(--text-body)" }}>
        {children}
      </p>
    </div>
  );
}
