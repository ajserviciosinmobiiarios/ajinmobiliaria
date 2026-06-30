import * as React from "react";

/** Wide-tracked uppercase overline label, used above section headings. */
export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "gold" */
  tone?: "gold" | "ink" | "muted" | "onDark";
  as?: keyof JSX.IntrinsicElements;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
