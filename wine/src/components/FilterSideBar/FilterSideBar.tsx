import * as S from './FilterSideBar.styles';
import { FilterSideBarProps } from './FilterSideBar.interfaces';
import { FilterByPriceRange, FilterByType } from '../Filters';

export const FilterSideBar = ({ showOnMobile }: FilterSideBarProps) => {
  return (
    <S.Container showOnMobile={showOnMobile}>
      <h1>Refine sua busca</h1>
      <FilterByType />
      <FilterByPriceRange />
    </S.Container>
  )
}