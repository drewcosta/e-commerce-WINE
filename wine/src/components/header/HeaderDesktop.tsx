import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { UserAccount } from '../UserAccount';
import { HeaderSearchMenu } from './Header-search-menu';
import { HeaderNavBarMenu } from './Header-navbar-menu';
import { HeaderCartMenu } from './Header-cart-menu';

export const HeaderDesktop = () => {
  return (
    <HeaderDesktopContainer>
      <Logo src={logo} alt=""/>
      <HeaderNavBarMenu />
      <div>
        <HeaderSearchMenu />
        <UserAccount />
        <HeaderCartMenu />
      </div>
    </HeaderDesktopContainer>
  )
}

const HeaderDesktopContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;

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
    padding: 0px 70px;
  }
`;

const Logo = styled(Image)`
  cursor: pointer;
`;
