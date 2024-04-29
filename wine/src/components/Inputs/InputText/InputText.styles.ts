import styled, { css } from "styled-components";
import { InputTextStyles } from "./InputText.interfaces";

export const Container = styled.div<InputTextStyles>`
  ${({ theme, $SearchWine }) =>
    $SearchWine && css`
      position: absolute;
      top: 110px;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      margin: auto;

      background-color: ${theme.backgroundColors.backgroundApp};
      box-shadow: 0 2px 20px 0 rgba(0,0,0,.15);
      z-index: 11;
    `
  }
`
export const InputText = styled.input<InputTextStyles>`
  ${({ theme, $SearchWine }) =>
    $SearchWine && css`
      width: 74%;
      padding: 15px;
      background-color: ${theme.colors.whiteBasic};
      border: none;
      border-radius: 4px;
      outline: none;
      font-size: 18px;
      color: #333;
    `
  }
`