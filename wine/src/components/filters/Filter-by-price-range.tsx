import { useFilter } from "@/hooks/useFilter"
import { PriceRange } from "@/types/price-range"
import { ContainerAdvancedSearch, AdvancedSearchTitle, AdvancedSearchList } from "@/styles/components/filter-styles"
import { InputRadioPriceRange } from "../input/Input-radio-price-range"

export const FilterByPriceRange = () => {
  const { priceRange, setPriceRange } = useFilter()

  const PriceRangeValues = Object.values(PriceRange)

  return (
    <ContainerAdvancedSearch>
      <AdvancedSearchTitle>Por Preço</AdvancedSearchTitle>

      <AdvancedSearchList>
        {PriceRangeValues.map((price, index) => (
          <InputRadioPriceRange
            key={index}
            label={price}
            checked={price === priceRange}
            onClick={() => setPriceRange(price)}
          />
        ))}
      </AdvancedSearchList>

    </ContainerAdvancedSearch>
  )
}
