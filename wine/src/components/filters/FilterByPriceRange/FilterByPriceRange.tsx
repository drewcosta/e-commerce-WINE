import * as S from './FilterByPriceRange.styles'
import { useFilter } from "@/hooks/useFilter"
import { PriceRange } from "@/types/PriceRange.enum"
import { InputRadio } from '@/components/Inputs';

export const FilterByPriceRange = () => {
  const { priceRange, setPriceRange } = useFilter();

  const PriceRangeValues = Object.values(PriceRange);

  return (
    <S.Container>
      <S.Title>Por Preço</S.Title>
      <S.BoxPrices>
        {PriceRangeValues.map((price, index) => (
          <InputRadio
            key={index}
            label={price}
            $checked={price === priceRange}
            onClick={() => setPriceRange(price)}
            $filterByPriceRange
          />
        ))}
      </S.BoxPrices>
    </S.Container>
  )
}
