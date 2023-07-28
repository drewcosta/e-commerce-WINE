import React from 'react'
import { FilterByType } from './Filter-by-type'
import { FilterByPriorityPrices } from './Filter-by-priority-prices'
import styled from 'styled-components'

export const FilterSideBar = () => {
  return (
    <Container>
      <h1>Refine sua busca</h1>
      <FilterByType />
      {/* <FilterByPriorityPrices /> */}
    </Container>
  )
}

const Container = styled.aside`
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
    
    /* @media (max-width: 768px){
      text-align: center;
    } */
  }
`

