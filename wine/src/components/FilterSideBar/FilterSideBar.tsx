import * as S from './FilterSideBar.styles';
import { FilterSideBarProps } from './FilterSideBar.interfaces';
import { FilterByPriceRange, FilterByType } from '../Filters';

export const FilterSideBar = ({ showOnMobile }: FilterSideBarProps) => {
  return (
    <S.Container showOnMobile={showOnMobile}>
      <h2>Refine sua busca</h2>
      <FilterByType />
      <FilterByPriceRange />
    </S.Container>
  )
}