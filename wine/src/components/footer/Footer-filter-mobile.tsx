import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimationSidebarResponsive } from '../AnimationSidebarResponsive'
import { FilterSideBar } from '../filters/FilterSideBar'


export const FooterFilter = () => {
  const [filterBar, setFilterBar] = useState(false)

  const showFilterBar = () => setFilterBar(!filterBar)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container>
      <ul>
        <li onClick={scrollToTop}>Topo</li>
        <li onClick={showFilterBar}>Filtrar</li>
        {filterBar && 
          <AnimationSidebarResponsive>
            <FilterSideBar show={filterBar} />
          </AnimationSidebarResponsive>
        }
      </ul>
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: 768px){
    width: 100%;
    height: 60px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    border: 1px solid #eaeaea;

    > ul {
      display: flex;
      padding: 0;
      color: var(--light-tannat);
      text-transform: uppercase;
      padding: 10px;

      > li {
        flex: 50%;
        list-style: none;
        padding: 10px;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
      }

      > li:nth-child(2) {
        border-left: 2px solid #d5d5d5;
      }
    }
  }
`

