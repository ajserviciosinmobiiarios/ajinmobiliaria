import * as React from "react";

/** Numbered editorial feature block — serif gold index, title, body copy. */
export interface PillarCardProps {
  index: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
  /** Hairline rule above the block. @default true */
  divider?: boolean;
}

export function PillarCard(props: PillarCardProps): JSX.Element;
