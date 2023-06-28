import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import cartIcon from '../assets/cart-icon.svg'
import { useLocalStorage } from '@/hooks/useLocalStorage'


export const Cart = () => {
  const { value } = useLocalStorage('cart-items');

  return (
    <CartContainer>
      <CartIcon src={cartIcon} alt=''  height={48}/>
      {value.length && <CartCount>{value.length}</CartCount>}
    </CartContainer>
  )
}

const CartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #F6B554;
  background: #F6B554;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  
  cursor: pointer;  
`

const CartCount = styled.span`
   position: absolute;
    left: 64.29%;
    right: 0%;
    top: 64.29%;
    bottom: 0%;

    display: flex;
    justify-content: center;
    align-items: center;

    Width: 20px;
    Height:20px;
   
    background-color: white;
    border-radius: 50%;
    color: #4FBFA5;
    z-index: 2;
`

const CartIcon = styled(Image)`
  position: absolute;
`