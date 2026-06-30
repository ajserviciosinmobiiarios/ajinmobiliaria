import * as React from "react";

/**
 * Primary call-to-action button for Aroa & Jon. Squared, uppercase, wide-tracked.
 *
 * @startingPoint section="Core" subtitle="Editorial CTA button — gold, dark, outline, text & whatsapp" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "dark" | "outline" | "text" | "whatsapp";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
