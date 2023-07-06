import React from 'react'
import styled from 'styled-components'
import { PriorityPrices } from '@/types/priority-prices'

interface Props{
  label: PriorityPrices,
  checked: boolean,
  onChange: () => void,
}

export const InputRadio = ({ label, checked, onChange }: Props) => {
  return (
    <DivInputRadio>
      <Input type='radio' checked={checked} onChange={onChange} />
      <label>{label}</label>
    </DivInputRadio>
  )
}

const DivInputRadio = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.12rem;
  cursor: pointer;

  label{
    color: #1D1D1B;
    text-transform: capitalize;
  }
`

const Input = styled.input`
  cursor: pointer;
`

