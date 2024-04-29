import { InputHTMLAttributes } from "react";

export interface InputTextStyles {
  $SearchWine?: boolean;
}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>, InputTextStyles {}