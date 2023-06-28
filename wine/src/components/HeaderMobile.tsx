import React, { useState } from 'react'
import { Cart } from './Cart'
import { NavBar } from './NavBar'
import { SearchInput } from './SearchInput'
import styled, { css } from 'styled-components'
import Image from 'next/image';
import logo from '../assets/logo.svg';


export const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderMobileContainer>
      <MenuIcon isOpen={menuOpen} onClick={handleMenuToggle}>{menuOpen ? 'X' : '☰'}</MenuIcon>
      <Logo src={logo} alt="" />

      <MenuMobile open={menuOpen}>
        <MenuIcon isOpen={menuOpen} onClick={handleMenuToggle}>{menuOpen ? 'X' : '☰'}</MenuIcon>
        <NavBar />
      </MenuMobile>
      <div>
        <SearchInput />
        <Cart />
      </div>
    </HeaderMobileContainer>
  )
}


const HeaderMobileContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    padding: 8px 18px;
    margin: auto;
    
    background: var(--estrutura-white);
  }
`;

const Logo = styled(Image)`
  cursor: pointer;

  @media (max-width: 425px) {
    height: 26px;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  font-size: 24px;
  transition: all 2s ease-in-out;

  @media (max-width: 768px) {
    display: block;

    ${({ isOpen }) => isOpen && css`
      position: absolute;
      top: 45px;
      left: 20px;
      color: #fff;
    `}
  }
`;

const MenuMobile = styled.div<{ open: boolean }>`
    transition: width 0.5s ease-in-out;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: ${({ open }) => (open ? '100%' : '0')};

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    z-index: 10;
  }
`;
