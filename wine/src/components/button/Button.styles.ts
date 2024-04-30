import styled, { css } from "styled-components";
import { ButtonStyles } from "./Button.interfaces";

export const Button = styled.button<ButtonStyles>`
  ${({ $addButton }) =>
    $addButton && css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem 1.4rem;
      width: auto;
      color: ${({ theme }) => theme.colors.whiteBasic};
      background: ${({ theme }) => theme.colors.greenSuccess};
      font-size: ${({ theme }) => theme.fontSizes.text_sm};
      font-weight: 700;
      line-height: 0.97338rem;
      text-transform: uppercase;
      
      border: none;
      border-radius: 0.24338rem;
      box-shadow: 0px 0.9733840227127075px 1.946768045425415px 0px rgba(0, 0, 0, 0.20);
      cursor: pointer;
    `
  }

  ${({ $filterByPriorityPrice, $selected, theme }) =>
    $filterByPriorityPrice && css`
      color: ${$selected ? theme.colors.whiteBasic : theme.colors.pink};
      background-color: ${$selected ? theme.colors.pink : 'none'};

      width: 35px;
      height: 35px;
      padding: 5px 0;

      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      border: inherit;

      &:hover{
        color: ${theme.colors.whiteBasic};
        background-color: ${theme.colors.pink};
      }

      & + button {
        border-left: 1px solid ${theme.colors.pink};
      }
    `
  }

  ${({ $backButton }) =>
    $backButton && css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: transparent;
      border: none;
      cursor: pointer;

      color: ${({ theme }) => theme.colors.greyDark};
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 120%;
      
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
    `
  }
`