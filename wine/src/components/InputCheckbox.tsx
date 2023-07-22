import React from 'react'
import styled from 'styled-components'
import { FilterTypes } from '@/types/filter-types'

interface Props{
  label: FilterTypes,
  checked: boolean,
  onClick?: () => void,
}

export const InputCheckbox = ({ label, checked, onClick }: Props) => {
  return (
    <CheckboxContent onClick={onClick}>
      <Span checked={checked} id={label}></Span>
      <label htmlFor={label}>{label}</label>
    </CheckboxContent>
  )
}

interface StylesProps{
  checked: boolean
}

const CheckboxContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.12rem;
  cursor: pointer;

  label{
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
`

const Span = styled.span<StylesProps>`
    background: #fff;
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #ccc;
    line-height: 0;
    padding: 2px;
    
    &::before{
      width: 11px;
      height: 11px;
      content: '';
      display: inline-block;
      transition: all .2s;
      transform: scale(0);
      transform: ${props => (props.checked ? 'scale(1)' : 'scale(0)')};
      vertical-align: middle;
      border-radius: 3px;
      background: ${props => (props.checked ? 'var(--light-tannat)' : '#fff')};
    }

    
`
