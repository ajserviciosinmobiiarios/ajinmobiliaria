import * as React from "react";

/** Squared surface container — light, cream or dark, with optional gold top rule. */
export interface CardProps {
  children: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "paper" | "cream" | "dark";
  /** @default "flat" */
  elevation?: "flat" | "card" | "lift";
  /** Gold 2px rule across the top edge. @default false */
  topRule?: boolean;
  /** @default 32 */
  padding?: number;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
