import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import lupa from '../assets/lupa-icon.svg'

export const SearchInput = () => {
  return (
    <InputContainer>
      <InputSearch src={lupa} alt='' />
    </InputContainer>
  )
}

const InputContainer = styled.div`
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
const InputSearch = styled(Image)`
  cursor: pointer;
  padding: 5px;
`

