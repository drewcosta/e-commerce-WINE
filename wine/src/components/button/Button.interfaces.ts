import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface ButtonStyles {
  $selected?: boolean;
  $addButton?: boolean;
  $backButton?: boolean;
  $filterByPriorityPrice?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyles {
  icon?: ReactElement;
}