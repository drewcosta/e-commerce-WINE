'use client'
import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components'
import { FilterSideBar } from '@/components/FilterSideBar'

export default function Home() {
  return (
    <Container>
      <FilterSideBar />
      {/* <Productlist /> */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--app-background);
`