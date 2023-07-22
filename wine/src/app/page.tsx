'use client'
import styles from './page.module.css'
import { FilterSideBar } from '@/components/FilterSideBar'
import { ProductsList } from '@/components/Products-list'

export default function Home() {
  return (
      <main className={styles.main}>
        <FilterSideBar />
        <ProductsList />
      </main>
  )
}