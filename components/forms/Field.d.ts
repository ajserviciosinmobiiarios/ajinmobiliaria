import * as React from "react";

interface Option { value: string; label: string; }

/** Labelled form control — input, textarea or select. Squared, gold focus. */
export interface FieldProps {
  label?: React.ReactNode;
  /** @default "input" */
  as?: "input" | "textarea" | "select";
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  required?: boolean;
  /** For as="select" */
  options?: (Option | string)[];
  rows?: number;
}

export function Field(props: FieldProps): JSX.Element;
