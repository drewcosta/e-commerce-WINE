'use client'
import { styled } from 'styled-components'
import { useFilter } from '@/hooks/useFilter'
import { FilterTypes } from '@/types/filter-types'
import { InputCheckbox } from './InputCheckbox'

export const FilterByType = () => {
  const filterValues= Object.values(FilterTypes) as FilterTypes[];

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
  margin-bottom: 1rem;

  h3{
    font-size: 1.2rem;
    line-height: normal;
    color: #333333;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`