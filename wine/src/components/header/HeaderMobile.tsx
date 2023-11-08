import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { HeaderSearchMenu } from './Header-search-menu';
import { HeaderNavBarMenu } from './Header-navbar-menu';
import { HeaderCartMenu } from './Header-cart-menu';
import { AnimationSidebarResponsive } from '../animations/AnimationSidebarResponsive';

export const HeaderMobile = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <HeaderMobileContainer>
      <MenuIcon onClick={showSiderbar}>☰</MenuIcon>
      <Logo src={logo} alt="" />
      {sidebar && 
        <AnimationSidebarResponsive>
          <HeaderNavBarMenu />
        </AnimationSidebarResponsive>
      }
      <div>
        <HeaderSearchMenu />
        <HeaderCartMenu />
      </div>
    </HeaderMobileContainer>
  )
}

const HeaderMobileContainer = styled.header`
  @media (max-width: ${props => props.theme.desktopBreakpoint}) {
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

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  
  @media (max-width: ${props => props.theme.desktopBreakpoint}) {
    display: block;
  }
`;