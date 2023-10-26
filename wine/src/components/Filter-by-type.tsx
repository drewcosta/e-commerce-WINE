import { css, styled } from 'styled-components'
import { useFilter } from '@/hooks/useFilter'
import { FilterTypes } from '@/types/filter-types'
import { InputCheckbox } from './InputCheckbox'

export const FilterByType = () => {
  const { type, setType } = useFilter()

  return (
    <ContainerFilterType>
      <h3>Por Tipo</h3>

      <InputCheckbox
        label={FilterTypes.ESPUMANTE}
        checked={type === FilterTypes.ESPUMANTE}
        onClick={() => setType(FilterTypes.ESPUMANTE)}
      />

      <InputCheckbox
        label={FilterTypes.BRANCO}
        checked={type === FilterTypes.BRANCO}
        onClick={() => setType(FilterTypes.BRANCO)}
      />

      <InputCheckbox
        label={FilterTypes.ROSE}
        checked={type === FilterTypes.ROSE}
        onClick={() => setType(FilterTypes.ROSE)}
      />

      <InputCheckbox
        label={FilterTypes.TINTO}
        checked={type === FilterTypes.TINTO}
        onClick={() => setType(FilterTypes.TINTO)}
      />

    </ContainerFilterType>
  )
}

const ContainerFilterType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  h3{
    font-size: 1.2rem;
    line-height: normal;
    color: #333333;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`