'use client'
import { styled } from 'styled-components'
import { useFilter } from '@/hooks/useFilter'
import { FilterTypes } from '@/types/filter-types'
import { InputCheckbox } from './InputCheckbox'

export const FilterByType = () => {
  const filterValues = Object.keys(FilterTypes) as FilterTypes[];

  return (
    <ContainerFilterType>
      <h3>Por Tipo</h3>
      {filterValues.map((filter) => (
        <InputCheckbox 
          key={filter}
          label={filter}
        />
      ))}
    </ContainerFilterType>
  )
}


const ContainerFilterType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3{
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    margin-bottom: 1rem;
  }
`