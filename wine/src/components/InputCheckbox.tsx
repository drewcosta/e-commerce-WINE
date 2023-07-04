import { FilterTypes } from '@/types/filter-types'
import React from 'react'
import styled from 'styled-components'

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

  p{
    color: #1D1D1B;
;
  }
`

const Input = styled.input`
  
`
