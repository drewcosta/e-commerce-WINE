import { css, styled } from 'styled-components'
import { useFilter } from '@/hooks/useFilter'
import { FilterTypes } from '@/types/filter-types'
import { InputCheckboxType } from './Input-checkbox-type'

export const FilterByType = () => {
  const { type, setType } = useFilter()

  return (
    <ContainerFilterType>
      <FilterTypeText>Por Tipo</FilterTypeText>

      <InputCheckboxList>
        <InputCheckboxType
          label={FilterTypes.ESPUMANTE}
          checked={type === FilterTypes.ESPUMANTE}
          onClick={() => setType(FilterTypes.ESPUMANTE)}
        />

        <InputCheckboxType
          label={FilterTypes.BRANCO}
          checked={type === FilterTypes.BRANCO}
          onClick={() => setType(FilterTypes.BRANCO)}
        />

        <InputCheckboxType
          label={FilterTypes.ROSE}
          checked={type === FilterTypes.ROSE}
          onClick={() => setType(FilterTypes.ROSE)}
        />

        <InputCheckboxType
          label={FilterTypes.TINTO}
          checked={type === FilterTypes.TINTO}
          onClick={() => setType(FilterTypes.TINTO)}
        />
      </InputCheckboxList>



    </ContainerFilterType>
  )
}

const ContainerFilterType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px){
    width: 100%;
  }
`

const FilterTypeText = styled.h3`
  font-size: 1.2rem;
  line-height: normal;
  color: #333333;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

const InputCheckboxList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`