import React from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityPrices } from '@/types/priority-prices'
import styled from 'styled-components'
import { InputRadio } from './InputRadio'

export const FilterByPriorityPrices = () => {
  const FilterValues = Object.values(PriorityPrices) as PriorityPrices[]

  return (
    <ContainerFilterPrices>
      <h3>Por Preço</h3>
      {FilterValues.map((filter) => (
        <InputRadio 
          key={filter}
          label={filter}
        />
      ))}
    </ContainerFilterPrices>
  )
}

const ContainerFilterPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

h3{
    font-size: 1.2rem;
    line-height: normal;
    color: #333333;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`