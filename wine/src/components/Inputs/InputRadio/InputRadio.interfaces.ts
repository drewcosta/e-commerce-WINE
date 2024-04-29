import { HTMLAttributes } from "react";

export interface InputRadioStyles {
  $filterByPriceRange?: boolean;
  $checked?: boolean;
}

export interface InputRadioProps extends HTMLAttributes<HTMLSpanElement>, InputRadioStyles {
  label?: string;
}