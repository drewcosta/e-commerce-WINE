import * as S from './FilterByPriorityPrices.styles'
import { Button } from '@/components/Button'
import { useFilter } from '@/hooks/useFilter'
import { PriorityPrices } from '@/types/PriorityPrices.enum'

export const FilterByPriorityPrices = () => {
  const { priority, setPriority } = useFilter()

  const PriorityPricesValues = Object.values(PriorityPrices)

  return (
    <S.Container>
      <h3>Ordenar</h3>

      <S.BoxPriorityPrices>
        {PriorityPricesValues.map((priorityValue, index) => (
          <Button
            key={index}
            $selected={priority === priorityValue}
            onClick={() => setPriority(priorityValue)}
            $filterByPriorityPrice
          >
            {priorityValue}
          </Button>
        ))}
      </S.BoxPriorityPrices>

    </S.Container>
  )
}