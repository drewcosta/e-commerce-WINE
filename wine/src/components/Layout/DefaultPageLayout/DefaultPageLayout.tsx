import * as S from './DefaultPageLayout.styles';
import { DefaultPageLayoutProps } from './DefaultPageLayout.interfaces';

export function DefaultPageLayout({ children }: DefaultPageLayoutProps) {
  return (
    <S.Container>{children} </S.Container>
  )
}