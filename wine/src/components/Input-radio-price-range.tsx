import { PriceRange } from '@/types/price-range';
import React from 'react';
import styled from 'styled-components';

interface Props {
  label: PriceRange,
  checked: boolean,
  onClick?: () => void,
}

export const InputRadioPriceRange = ({ label, checked, onClick }: Props) => {
  return (
    <RadioItemList checked={checked} onClick={onClick}>
      <Span checked={checked} id={label}></Span>
      <label htmlFor={label}>{label}</label>
    </RadioItemList>
  )
}

interface StylesProps {
  checked: boolean
}

const RadioItemList = styled.li<StylesProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.12rem;
  cursor: pointer;

  label{
    font-size: 14px;
    color: #1D1D1B;
    text-transform: capitalize;
    cursor: pointer;
  }

  &:hover > span::before {
    transition: all 0.2s;
    transform: scale(1);
    background: var(--light-tannat);
    opacity: .5;
  }

  &:hover > label {
    color: var(--light-tannat);
  }

  @media (max-width: 425px){
      border: ${props => props.checked ? '1px solid var(--light-tannat)' : '1px solid #dedede'};
      border-radius: 5px;
      display: block;
      padding: 10px;
      width: 100%;
    }
`

const Span = styled.span<StylesProps>`
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #ccc;
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
      transform: ${props => (props.checked ? 'scale(1)' : 'scale(0)')};
      vertical-align: middle;
      border-radius: 50%;
      background: ${props => (props.checked ? 'var(--light-tannat)' : '#fff')};
    }    
`

