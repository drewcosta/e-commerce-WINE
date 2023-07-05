import React from 'react'
import styled from 'styled-components'
import { PriorityPrices } from '@/types/priority-prices'

interface Props{
  label: PriorityPrices,
}

export const InputRadio = ({ label }: Props) => {
  return (
    <DivInputRadio>
      <Input type='radio' />
      <p>{label}</p>
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

  p{
    color: #1D1D1B;
    text-transform: capitalize;
  }
`

const Input = styled.input`
  cursor: pointer;
`

