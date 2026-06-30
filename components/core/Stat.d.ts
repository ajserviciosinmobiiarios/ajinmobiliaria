import * as React from "react";

/** Large serif figure over an uppercase label — credentials & trust stats. */
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** @default "ink" */
  tone?: "ink" | "onDark";
  /** @default "left" */
  align?: "left" | "center";
}

export function Stat(props: StatProps): JSX.Element;
