'use client'

import styles from './page.module.css'
import styled from 'styled-components'
import { FilterSideBar } from '@/components/FilterSideBar'
import { ProductsList } from '@/components/Products-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        {/* <FilterSideBar /> */}
        {/* <ProductsList /> */}
      </main>
    </QueryClientProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--app-background);
`