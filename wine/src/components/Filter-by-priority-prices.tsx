import React from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityPrices } from '@/types/priority-prices'
import styled from 'styled-components'
import { InputRadio } from './InputRadio'

export const FilterByPriorityPrices = () => {
  const { priority, setPriority } = useFilter()

  return (
    <ContainerFilterPrices>
      <h3>Por Preço</h3>

      <InputRadio
        label={PriorityPrices.ATE_40}
        checked={priority === PriorityPrices.ATE_40}
        onClick={() => setPriority(PriorityPrices.ATE_40)}
      />

      <InputRadio
        label={PriorityPrices.R40_60}
        checked={priority === PriorityPrices.R40_60}
        onClick={() => setPriority(PriorityPrices.R40_60)}
      />

      <InputRadio
        label={PriorityPrices.R100_200}
        checked={priority === PriorityPrices.R100_200}
        onClick={() => setPriority(PriorityPrices.R100_200)}
      />

      <InputRadio
        label={PriorityPrices.R200_500}
        checked={priority === PriorityPrices.R200_500}
        onClick={() => setPriority(PriorityPrices.R200_500)}
      />

      <InputRadio
        label={PriorityPrices.ACIMA_500}
        checked={priority === PriorityPrices.ACIMA_500}
        onClick={() => setPriority(PriorityPrices.ACIMA_500)}
      />
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

  @media (max-width: 768px){
    width: 100%;
  }
`