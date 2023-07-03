import React from 'react'
import { FilterByType } from './Filter-by-type'
import { FilterByPriority } from './Filter-by-priority'
import styled from 'styled-components'

export const FilterSideBar = () => {
  return (
    <Container>
      <h1>Refine sua busca</h1>
      <FilterByType />
      <FilterByPriority />
    </Container>
  )
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  h1{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
`

