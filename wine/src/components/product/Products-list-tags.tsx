import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";

export const ProductsListTag = () => {

  const { type, priceRange, setType, setPriceRange } = useFilter()

  const TagFilter = [type, priceRange].filter((filter) => filter)

  const removeFilter = (filter: string) => {
    if (filter == type) {
      setType('')
    }

    if (filter == priceRange) {
      setPriceRange('')
    }
  }

  return (
    <ProductsListTags>
      {(type || priceRange) && (
        TagFilter.map((tag, index) => (
          <Tag
            key={index}
          >
            {tag}
            <Span onClick={() => removeFilter(tag)}>X</Span>
          </Tag>
        ))
      )}
    </ProductsListTags>
  )
}

const ProductsListTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 0;
`
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 3px 6px;

  font-size: 11px;
  color: var(--estrutura-white);
  background-color: var(--light-tannat);
  border-radius: 3px;
`
const Span = styled.span`
  font-size: 8px;
  cursor: pointer;
`

