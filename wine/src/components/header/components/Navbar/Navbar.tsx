import * as S from './Navbar.styles';

export function Navbar() {
  return (
    <S.Container>
      <S.NavList>
        <S.NavItem >Clube</S.NavItem>
        <S.NavItem $selected>Loja</S.NavItem>
        <S.NavItem >Produtores</S.NavItem>
        <S.NavItem >Ofertas</S.NavItem>
        <S.NavItem >Eventos</S.NavItem>
      </S.NavList>
    </S.Container>
  )
}