import styled, { css } from 'styled-components'
import { InputRadioStyles } from './InputRadio.interfaces'

export const Container = styled.div<InputRadioStyles>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.12rem;
  cursor: pointer;

  label{
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    color: ${({ theme }) => theme.colors.black};
    text-transform: capitalize;
    cursor: pointer;
  }

  &:hover > span::before {
    transition: all 0.2s;
    transform: scale(1);
    background: ${({ theme }) => theme.colors.pink};
    opacity: .5;
  }

  &:hover > label {
    color: ${({ theme }) => theme.colors.pink};
  }

  @media (max-width: 425px){
      border: 1px solid;
      border-color: ${({ theme, $checked }) => $checked ? theme.colors.pink : theme.colors.whiteAlmostGrey};
      border-radius: 5px;
      display: block;
      padding: 10px;
      width: 100%;
    }
`

export const Radio = styled.span<InputRadioStyles>`
  ${({ theme, $checked, $filterByPriceRange }) =>
    $filterByPriceRange && css`
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 3px;
      background: ${theme.colors.whiteBasic};
      line-height: 0;
      padding: 2px;
      margin-right: 5px;
      
      &::before{
        width: 11px;
        height: 11px;
        content: '';
        display: inline-block;
        transition: all .2s;
        transform: scale(0);
        transform: ${$checked ? 'scale(1)' : 'scale(0)'};
        vertical-align: middle;
        border-radius: 3px;
        background: ${$checked ? theme.colors.pink : theme.colors.whiteBasic};
      }
    `
  }
`