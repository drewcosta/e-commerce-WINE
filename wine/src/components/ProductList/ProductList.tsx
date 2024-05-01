import * as S from './ProductList.styles';
import { useFilter } from "@/hooks/useFilter";
import { useProducts } from "@/hooks/useProducts";
import { FilterByPriorityPrices } from '../Filters';
import { ProductsTags } from './ProductTags';
import { ProductCard } from './ProcuctCard';
import { Pagination } from './Pagination';

export function ProductList() {
  const { data, totalCount } = useProducts();
  const { type } = useFilter();

  const getCountForType = (type: string) => {
    if (!type) {
      return totalCount;
    }
    return totalCount;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <span>{getCountForType(type)} </span>
          <span>produtos encontrados</span>
        </S.Title>
        <FilterByPriorityPrices />
      </S.Header>

      <ProductsTags />

      <S.ProductList>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </S.ProductList>

      <Pagination />

    </S.Container>
  )
}