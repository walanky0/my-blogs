import type { InputHTMLAttributes } from "react";

export type InputFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
