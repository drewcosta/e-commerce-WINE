import React from 'react'
import styled from 'styled-components'
import { FilterTypes } from '@/types/filter-types'

interface Props{
  label: FilterTypes,
}

export const InputCheckbox = ({ label }: Props) => {
  return (
    <DivCheckbox>
      <Input type='checkbox' />
      <p>{label}</p>
    </DivCheckbox>
  )
}

const DivCheckbox = styled.div`
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
