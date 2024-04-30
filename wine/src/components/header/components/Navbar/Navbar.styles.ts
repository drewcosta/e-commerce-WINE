import styled from "styled-components";
import { NavbarStyles } from "./Navbar.interfaces";

export const Container = styled.nav``

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablets}) {
    flex-direction: column;
  }
`

export const NavItem = styled.li<NavbarStyles>`
  color: ${({ theme, $selected }) => $selected ? theme.colors.pink : theme.colors.greyDark};

  font-family: inherit;
  font-size: 18px;
  font-weight: ${({ $selected }) => $selected ? '700' : '400'};

  list-style: none;
  line-height: 24px;
  text-transform: capitalize;
  cursor: pointer;

  padding: 30px 0;
  border-bottom: ${({ theme, $selected }) => $selected ? `2px solid ${theme.colors.pink}` : ''};

  &:hover{
    color: ${({ theme }) => theme.colors.pink};
    border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablets}) {
    font-size: ${({ theme }) => theme.fontSizes.text_base};
    color: ${({ theme }) => theme.colors.pink};
    font-weight: bold !important;
    border-bottom: none !important;
  }
`