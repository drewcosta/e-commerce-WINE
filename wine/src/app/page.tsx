'use client'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import { DefaultProviders } from '@/components/DefaultProviders'
import { FilterSideBar } from '@/components/FilterSideBar'
import { ProductsList } from '@/components/Products-list'
import styled from 'styled-components'

export default function Home() {
  return (
    <DefaultPageLayout>
      <Main>
        <FilterSideBar />
        <ProductsList />
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