import { FilterTypes } from '@/types/filter-types'
import { ContainerAdvancedSearch, AdvancedSearchTitle, AdvancedSearchList } from '@/styles/components/filter-styles'
import { InputCheckboxType } from '../Input-checkbox-type'
import { useFilter } from '@/hooks/useFilter'

export const FilterByType = () => {
  const { type, setType } = useFilter()

  const FilterTypesValues = Object.values(FilterTypes)

  return (
    <ContainerAdvancedSearch>
      <AdvancedSearchTitle>Por Tipo</AdvancedSearchTitle>

      <AdvancedSearchList>
        {FilterTypesValues.map((typeValue, index) => (
          <InputCheckboxType
            key={index}
            label={typeValue}
            checked={type === typeValue}
            onClick={() => setType(typeValue)}
          />
        ))}
      </AdvancedSearchList>

    </ContainerAdvancedSearch>
  )
}