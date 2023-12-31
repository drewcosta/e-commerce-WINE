import React from 'react'
import styled from 'styled-components'
import { FilterByType } from './Filter-by-type'
import { FilterByPriceRange } from './Filter-by-price-range'

interface Props{
  show?: string | boolean
}

export const FilterSideBar = ({ show }: Props) => {
  return (
    <Container show={show}>
      <h1>Refine sua busca</h1>
      <FilterByType />
      <FilterByPriceRange />
    </Container>
  )
}

const Container = styled.aside<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  h1{
    color: #000;
    font-family: inherit;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 30px;

    @media (max-width: 768px){
      text-align: center;
        width: inherit;
    }
  }

  @media (max-width: 425px){
    display: ${props => (props.show ? 'flex' : 'none')};
    width: 100%;
    padding: 10px;
  }
`

