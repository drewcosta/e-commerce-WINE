import React from 'react'
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem selected={false}>Clube</NavItem>
        <NavItem selected>Loja</NavItem>
        <NavItem selected={false}>Produtores</NavItem>
        <NavItem selected={false}>Ofertas</NavItem>
        <NavItem selected={false}>Eventos</NavItem>
      </NavList>
    </NavContainer>
  )
}

interface Props{
  selected: boolean;
}

const NavContainer = styled.nav``

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavItem = styled.li<Props>`
  color: var(--gray-default);
  color: ${props => props.selected ? 'var(--light-tannat)' :'var(--gray-default)'};

  font-family: inherit;
  font-size: 18px;
  font-weight: ${props => props.selected ? '700' : '400'};

  list-style: none;
  line-height: 24px;
  text-transform: capitalize;
  cursor: pointer;

  padding: 30px 0;
  border-bottom: ${props => props.selected ? '2px solid var(--light-tannat)' : ''};

  &:hover{
    color: var(--light-tannat);
    border-bottom: 2px solid var(--light-tannat);
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    color: var(--light-tannat);
    font-weight: bold !important;
    border-bottom: none !important;
  }
`