import { useProduct } from '@/hooks/useProduct';
import React from 'react'
import styled from 'styled-components'

export const CartAddButton = ({ searchParams }: { searchParams: { id: string }}) => {
  const { data } = useProduct(searchParams.id);

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem('cart-items');
    if(cartItems) {
        let cartItemsArray = JSON.parse(cartItems);

        let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id);

        if(existingProductIndex != -1){
            cartItemsArray[existingProductIndex].quantity += 1;
        } else {
            cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
        }

        localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    } else {
        const newCart = [{ ...data, quantity: 1, id: searchParams.id }]
        localStorage.setItem('cart-items', JSON.stringify(newCart));
    }
}

  return (
    <Button onClick={handleAddToCart}>Adicionar</Button>
  )
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 1.4rem;
    width: auto;
    
    color: #FFF;
    background: var(--sucess-default);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 0.97338rem;
    text-transform: uppercase;
    
    border: none;
    border-radius: 0.24338rem;
    box-shadow: 0px 0.9733840227127075px 1.946768045425415px 0px rgba(0, 0, 0, 0.20);
`

