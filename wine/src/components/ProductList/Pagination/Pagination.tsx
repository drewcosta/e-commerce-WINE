import * as S from './Pagination.styles';
import { useFilter } from "@/hooks/useFilter";
import { usePagination } from "@/hooks/usePagination";

export function Pagination() {
  const { currentPage } = useFilter();
  const { goToPage, totalPage } = usePagination();

  return (
    <S.Container>
      {Array.from({ length: totalPage }, (_, index) => (
        <S.Pages
          key={index}
          $selected={currentPage === index}
          onClick={() => goToPage(index)}
        >{index + 1}</S.Pages>
      ))}
    </S.Container>
  )
}