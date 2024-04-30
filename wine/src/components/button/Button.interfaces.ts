import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface ButtonStyles {
  $selected?: boolean;
  $addButton?: boolean;
  $filterByPriorityPrice?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyles {
  icon?: ReactElement;
}