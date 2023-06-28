import React from 'react'
import styled from 'styled-components';
import { Cart } from './Cart';
import { NavBar } from './NavBar';
import { SearchInput } from './SearchInput';
import { UserAccount } from './UserAccount';
import Image from 'next/image';
import logo from '../assets/logo.svg';

export const HeaderDesktop = () => {
  return (
    <HeaderDesktopContainer>
      <Logo src={logo} alt="" />
      <NavBar />
      <div>
        <SearchInput />
        <UserAccount />
        <Cart />
      </div>
    </HeaderDesktopContainer>
  )
}

const HeaderDesktopContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 31px 160px;

  border-bottom: 2px solid #CCCCCC;
  background: #FFFFFF;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 42px;

    @media (max-width: 1024px) {
      gap: 20px;
    }
  }

  @media (max-width: 1440px) {
    padding: 31px 70px;
  }
`;

const Logo = styled(Image)`
  cursor: pointer;

  @media (max-width: 425px) {
    height: 26px;
  }
`;
