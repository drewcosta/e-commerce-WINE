import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

export const AnimationSidebarResponsive = ({ children }: Props) => {

  const [active, setActive] = useState(true)

  const closeSidebar = () => {
    setActive(false)
  }
  
    

  return (
    <Container sidebar={active}>
      <Close onClick={closeSidebar}>X</Close>  
      <Content>
        {children}
      </Content>
    </Container>
  )
}

interface SidebarProps {
  sidebar: boolean
}

const Container = styled.div<SidebarProps>`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`
const Close = styled.div`
  position: fixed;
  color: white;
  width: 30px;
  height: 30px;
  margin-top: 48px;
  margin-left: 25px;
  cursor: pointer;
`
const Content = styled.div`
  margin-top: 100px;
`

