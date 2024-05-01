'use client'
import { FilterSideBar } from '@/components/FilterSideBar'
import { DefaultPageLayout } from '@/components/Layout/DefaultPageLayout'
import { ProductList } from '@/components/ProductList'
import styled from 'styled-components'

export default function Home() {
  return (
    <DefaultPageLayout>
      <Main>
        <FilterSideBar />
        <ProductList />
      </Main>
    </DefaultPageLayout>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;