'use client'
import { useProducts } from '@/hooks/useProducts'

export const ProductsList = () => {
  const { data } = useProducts()
  console.log(data)

  return (
    <div>Products-list</div>
  )
}

