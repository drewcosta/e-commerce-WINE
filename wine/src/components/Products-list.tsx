'use client'
import { useProducts } from '@/hooks/useProducts'
import styled from 'styled-components'
import { ProductCard } from './Product-card'
import { useState } from 'react'
import { FilterTypes } from '@/types/filter-types'
import { useFilter } from '@/hooks/useFilter'

export const ProductsList = () => {
  const [value, setValue] = useState(20)
  const { data } = useProducts()
  const { type } = useFilter()
  console.log(data)
  
  const getCountForType = (type: string) => {
    if (!type) {
      return data?.length
    }
    return data?.filter((filter) => filter.category === type).length;
  }

  return (
    <ContainerProducts>
      <ObjectsCount> <strong>{getCountForType(type)} </strong> produtos encontrados</ObjectsCount>
      <ContentList>
        {data?.map((product, index) => index < value && (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            id={product.id}
          />
        ))}
      </ContentList>
    </ContainerProducts>
  )
}

const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  max-width: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const ObjectsCount = styled.div`
  margin-bottom: 30px;
`