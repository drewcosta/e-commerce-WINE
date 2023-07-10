import React from 'react'
import styled from 'styled-components'

interface ProductCardProps{
  name?: string,
  image?: string,
  price?: number,
}

export const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <Container>
      <Card>
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p><strong>Sócio wine</strong>R${price}</p>
      </Card>
      <button>adicionar</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.91rem;

  > button {
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
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  
  width: 16rem;
  height: 20rem;
  
  background: #FFF;
  box-shadow: 0px 9.733839988708496px 14.600760459899902px 0px rgba(0, 0, 0, 0.10);

  img {
    padding: 10px 30px;
    width: 12rem;
    cursor: pointer; 
  }

  p{
    color: #B6116E;
    font-weight: 700;
    font-size: 0.875rem;

    strong{
      color: #1D1D1B;
      text-transform: uppercase;
      margin-right: 5px;
      font-size: 0.68rem;
    }
  }
`

