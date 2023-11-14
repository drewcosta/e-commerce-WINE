'use client'
import { useProducts } from '@/hooks/useProducts'
import styled from 'styled-components'
import { ProductCard } from './Product-card'
import { useFilter } from '@/hooks/useFilter'
import { FilterByPriorityPrices } from '../filters/Filter-by-priority-prices'
import { Pagination } from '../Pagination'
import { ProductsListTag } from './Products-list-tags'

export const ProductsList = () => {
  const { data, totalCount } = useProducts()
  const { type } = useFilter()

  const getCountForType = (type: string) => {
    if (!type) {
      return totalCount
    }
    return totalCount;
  }

  return (
    <ProductlistContainer>
      <HeaderProductList>
        <HeaderProductListText>
            <span>{getCountForType(type)} </span>
            <span>produtos encontrados</span>
        </HeaderProductListText>
        <FilterByPriorityPrices />
      </HeaderProductList>

      <ProductsListTag />

      <ProductlistContent>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            id={product.id}
          />
          ))}
      </ProductlistContent>

      <FooterProductList>
        <Pagination />
      </FooterProductList>
      
    </ProductlistContainer>
  )
}

const ProductlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  @media (max-width: 1024px) {
    /* align-items: center; */
    width: 100%;
  }
`
const ProductlistContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 100%;
`

const HeaderProductList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid #b6b3b3e6;
  padding-bottom: 15px;
`

const HeaderProductListText = styled.h3`
  > span:nth-child(2){
    font-weight: normal;  
    font-size: 15px;
    color: var(--gray-default);
  }
`

const FooterProductList = styled.div`
  width: inherit;
`