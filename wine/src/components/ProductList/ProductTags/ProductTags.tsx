import * as S from './ProductTags.styles';
import { useFilter } from "@/hooks/useFilter";

export function ProductsTags() {

  const { type, priceRange, setType, setPriceRange } = useFilter();

  const tagFilter = [type, priceRange].filter((filter) => filter);

  const removeTag = (tag: string) => {
    if (tag == type) {
      setType('');
    }

    if (tag == priceRange) {
      setPriceRange('');
    }
  }

  return (
    <S.Container>
      {(type || priceRange) && (
        tagFilter.map((tag, index) => (
          <S.Tag key={index}>
            {tag}
            <S.Span onClick={() => removeTag(tag)}>X</S.Span>
          </S.Tag>
        ))
      )}
    </S.Container>
  )
}
