import * as S from './FilterByType.styles';
import { FilterTypes } from '@/types/FilterTypes.enum';
import { useFilter } from '@/hooks/useFilter';
import { InputCheckbox } from '@/components/Inputs';


export const FilterByType = () => {
  const { type, setType } = useFilter();

  const FilterTypesValues = Object.values(FilterTypes);

  return (
    <S.Container>
      <S.Title>Por Tipo</S.Title>
      <S.BoxTypes>
        {FilterTypesValues.map((typeValue, index) => (
          <InputCheckbox
            key={index}
            label={typeValue}
            $checked={type === typeValue}
            onClick={() => setType(typeValue)}
            $filterByType 
          />
        ))}
      </S.BoxTypes>
    </S.Container>
  )
}