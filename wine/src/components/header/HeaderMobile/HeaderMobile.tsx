import * as S from './HeaderMobile.styles';
import { useState } from "react";
import { AnimationSidebarResponsive } from "@/components/Animations/AnimationSidebarResponsive";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Store } from "../components/Store";
import logo from '../../../assets/logo.svg';

export function HeaderMobile() {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <S.Container>
      <S.MenuIcon onClick={showSiderbar}>☰</S.MenuIcon>
      <S.Logo src={logo} alt="" />
      {sidebar &&
        <AnimationSidebarResponsive>
          <Navbar />
        </AnimationSidebarResponsive>
      }
      <div>
        <Search />
        <Store />
      </div>
    </S.Container>
  )
}