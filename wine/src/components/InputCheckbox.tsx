import React from 'react'
import styled from 'styled-components'
import { FilterTypes } from '@/types/filter-types'

interface Props{
  label: FilterTypes,
  checked: boolean,
  onChange?: () => void,
}

export const InputCheckbox = ({ label, checked, onChange }: Props) => {
  return (
    <DivCheckbox>
      <Input type='checkbox' checked={checked} onChange={onChange} />
      <label>{label}</label>
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
  
  label{
    color: #1D1D1B;
    text-transform: capitalize;
  }
`

const Input = styled.input`
  cursor: pointer;
`
