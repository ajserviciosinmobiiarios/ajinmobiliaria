import * as React from "react";

/** Small squared uppercase label / tag. */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "outline" */
  variant?: "outline" | "solid" | "soft" | "dark";
}

export function Badge(props: BadgeProps): JSX.Element;
