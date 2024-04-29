import { HTMLAttributes } from "react";

export interface InputCheckboxStyles {
  $filterByType?: boolean;
  $checked?: boolean;
}

export interface InputCheckboxProps extends HTMLAttributes<HTMLSpanElement>, InputCheckboxStyles {
  label?: string;
}