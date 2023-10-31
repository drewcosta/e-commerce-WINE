import React from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityPrices } from '@/types/priority-prices'
import styled from 'styled-components'

export const FilterByPriorityPrices = () => {
  const { priority, setPriority } = useFilter()

  const handleChangePriority = (value: PriorityPrices) => {
    setPriority(value)
  }

  return (
    <ContainerFilterPrices>
      <h3>Ordenar</h3>

      <FilterByOrder>
        <ItemOrder
          selected={priority === PriorityPrices.MINOR_PRICE}
          onClick={() => handleChangePriority(PriorityPrices.MINOR_PRICE)}
        >
          $
        </ItemOrder>
        <ItemOrder
          selected={priority === PriorityPrices.BIGGEST_PRICE}
          onClick={() => handleChangePriority(PriorityPrices.BIGGEST_PRICE)}
        >
          $$
        </ItemOrder>
      </FilterByOrder>

    </ContainerFilterPrices>
  )
}

interface FilterItemOrderProps {
  selected: boolean;
}

const ContainerFilterPrices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

h3{
    font-size: 15px;
    line-height: normal;
    color: #333333;
    font-weight: 500;
    text-transform: capitalize;
  }

  @media (max-width: 425px) {
    h3{
      display: none;
    }
  }
`

const FilterByOrder = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--light-tannat);
  border-radius: 4px;
  list-style: none;
`

const ItemOrder = styled.li<FilterItemOrderProps>`
  color: ${props => props.selected ? 'white' : 'var(--light-tannat)'};
  background-color: ${props => props.selected ? 'var(--light-tannat)' : 'none'};

  width: 35px;
  height: 35px;
  padding: 5px 0;

  vertical-align: middle;
  text-align: center;
  cursor: pointer;

  &:hover{
    color: white;
    background-color: var(--light-tannat);
  }

  & + li {
    border-left: 1px solid var(--light-tannat);
  }
`