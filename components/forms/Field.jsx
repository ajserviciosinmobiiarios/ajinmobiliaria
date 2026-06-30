import React from "react";

/**
 * Aroa & Jon — Field (label + input/textarea)
 * Squared, hairline underline-forward inputs. Gold focus.
 */
export function Field({ label, type = "text", as = "input", placeholder, value, onChange, required = false, options = [], rows = 4, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const ctrl = {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: "var(--aj-ink)",
    background: "var(--aj-white)",
    border: "1px solid " + (focused ? "var(--aj-gold)" : "var(--line-soft)"),
    borderRadius: "var(--radius-none)",
    padding: "14px 16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color var(--t-fast)",
  };
  return (
    <label style={{ display: "block" }}>
      {label && (
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>
          {label}{required && <span style={{ color: "var(--aj-gold-deep)" }}> *</span>}
        </span>
      )}
      {as === "textarea" ? (
        <textarea style={{ ...ctrl, resize: "vertical" }} rows={rows} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest} />
      ) : as === "select" ? (
        <select style={ctrl} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest}>
          {options.map((o) => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}
        </select>
      ) : (
        <input style={ctrl} type={type} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest} />
      )}
    </label>
  );
}
