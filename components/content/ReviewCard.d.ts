import * as React from "react";

/** Google review card — gold star rating, italic quote, reviewer name & source. */
export interface ReviewCardProps {
  name: React.ReactNode;
  /** @default "Google" */
  source?: React.ReactNode;
  /** 0–5 @default 5 */
  stars?: number;
  children: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
}

export function ReviewCard(props: ReviewCardProps): JSX.Element;
