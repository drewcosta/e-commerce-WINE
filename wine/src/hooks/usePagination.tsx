import { useFilter } from "./useFilter";
import { useProducts } from "./useProducts";

export const usePagination = () => {
  const { totalCount } = useProducts()
  const { currentPage, setCurrentPage, perPage } = useFilter();

  const totalPage = totalCount ? Math.ceil(totalCount / perPage) : 0;

  const goToPage = (page: number) => {
    if(page >= 0 && page < totalPage){
      setCurrentPage(page);
    }
  }

  const goToNextPage = () => {
    if(currentPage < totalPage - 1){
      setCurrentPage(currentPage + 1);
    }
  }

  const goToPrevPage = () => {
    if(currentPage > 0 ){
      setCurrentPage(currentPage - 1);
    }
  }
  
  return {
    goToPage,
    goToNextPage,
    goToPrevPage,
    totalPage,
  }
}

