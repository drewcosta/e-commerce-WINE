'use client'
import { useProducts } from '@/hooks/useProducts'
import styled from 'styled-components'
import { ProductCard } from './Product-card'
import { useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { FilterByPriorityPrices } from './Filter-by-priority-prices'
import { Pagination } from './Pagination'

export const ProductsList = () => {
  // const [value, setValue] = useState(5)
  const { data, totalCount } = useProducts()
  const { type } = useFilter()

  const getCountForType = (type: string) => {
    if (!type) {
      return totalCount
    }
    return data?.filter((filter) => filter.category === type).length;
  }

  return (
    <ContainerProducts>
      <HeaderProductList>
        <HeaderProductListText>
          <h3>
            <span>{getCountForType(type)} </span>
            <span>produtos encontrados</span>
          </h3>
        </HeaderProductListText>
        <FilterByPriorityPrices />
      </HeaderProductList>
      <ContentList>
        {data?.map((product, index) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            id={product.id}
          />
        ))}
      </ContentList>

      {/* <button
        style={{ display: "flex", justifyContent: "center", color: "var(--light-tannat)", border: "2px solid var(--light-tannat)", borderRadius: "4px", padding: "20px", cursor: "pointer", textTransform: "uppercase" }}
        // onClick={() => setValue(value + 8)}
      >mostrar mais</button> */}
      <FooterProductList>
        <Pagination />
      </FooterProductList>
    </ContainerProducts>
  )
}

const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

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

const HeaderProductList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  border-bottom: 1px solid #b6b3b3e6;
  padding-bottom: 15px;
`

const HeaderProductListText = styled.div`
  h3 > span:nth-child(2){
    font-weight: normal;  
    font-size: 15px;
    color: var(--gray-default);
  }
`

const FooterProductList = styled.div`
  width: inherit;
`