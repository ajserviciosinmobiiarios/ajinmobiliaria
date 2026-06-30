import * as React from "react";

/** Large italic editorial pull-quote with optional attribution. */
export interface QuoteProps {
  children: React.ReactNode;
  cite?: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
  /** @default "lg" */
  size?: "lg" | "md";
}

export function Quote(props: QuoteProps): JSX.Element;
