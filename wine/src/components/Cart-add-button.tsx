import React from 'react'
import styled from 'styled-components'

interface Props{
  onClick?: () => void
}

export const CartAddButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>Adicionar</Button>
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
    cursor: pointer;
`

