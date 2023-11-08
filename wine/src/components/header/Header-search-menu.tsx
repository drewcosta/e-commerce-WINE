import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import lupa from '../../assets/lupa-icon.svg'
import { useFilter } from '@/hooks/useFilter'
import { SearchInput } from '../Input-search'

export const HeaderSearchMenu = () => {
  const {search, setSearch} = useFilter()
  const [show, setShow] = useState(false)

  const toogleShow = () => {
    setShow(prev => !prev)
  }

  return (
    <>
      <SearchContainer>
        <SearchImg src={lupa} alt='' onClick={toogleShow}/>
      </SearchContainer>
      {show && 
        <SearchInput 
          value={search}
          handleChange={setSearch}
        />
      }
    </>
  )
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 2px solid var(--gray-default);

  @media (max-width: 768px) {
    border: none;
  }
`
const SearchImg = styled(Image)`
  cursor: pointer;
  padding: 5px;
`

