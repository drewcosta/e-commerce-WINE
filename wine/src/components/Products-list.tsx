'use client'
import { useProducts } from '@/hooks/useProducts'
import styled from 'styled-components'
import { ProductCard } from './Product-card'
import { useState } from 'react'

export const ProductsList = () => {
  const [value, setValue] = useState(20)
  const { data } = useProducts()
  console.log(data)

  return (
    <ContainerList>
      {data?.map((product, index) => index < value && (
        <ProductCard 
          key={product.id}
          name={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ContainerList>
  )
}

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 52rem;
`