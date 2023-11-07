import styled from "styled-components"
import { useFilter } from "@/hooks/useFilter"
import { InputRadioPriceRange } from "./Input-radio-price-range"
import { PriceRange } from "@/types/price-range"

export const FilterByPriceRange = () => {
  const { priceRange, setPriceRange } = useFilter()

  const PriceRangeValues = Object.values(PriceRange)

  return (
    <ContainerPriceRange>
      <PriceRangeText>Por Preço</PriceRangeText>

      <InputRadioList>
        {PriceRangeValues.map((price, index) => (
          <InputRadioPriceRange
            key={index}
            label={price}
            checked={price === priceRange}
            onClick={() => setPriceRange(price)}
          />
        ))}
      </InputRadioList>

    </ContainerPriceRange>
  )
}

const ContainerPriceRange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px){
    width: 100%;
  }
`

const PriceRangeText = styled.h3`
  font-size: 1.2rem;
  line-height: normal;
  color: #333333;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

const InputRadioList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
