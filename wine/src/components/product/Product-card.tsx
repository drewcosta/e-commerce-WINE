import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { CartAddButton } from '../button/Cart-add-button'

interface ProductCardProps{
  name?: string,
  image?: string,
  price?: number,
  id: string,
}

export const ProductCard = ({ name, image, price, id }: ProductCardProps) => {
  const router = useRouter()

  const handleNavigate = () =>{
    router.push("/product?id=" + id)
  }

  return (
    <Container>
      <Card>
        <img className='cardImg' src={image} alt="" onClick={handleNavigate}/>
        <h4 className='cardDescription'>{name}</h4>
        <p className='cardPrice'><strong>Sócio wine</strong>R${price}</p>
      </Card>
      <CartAddButton searchParamsId={id} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.91rem;
  cursor: pointer;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 12rem;
  height: 20rem;
  
  background: #FFF;
  box-shadow: 0px 9.733839988708496px 14.600760459899902px 0px rgba(0, 0, 0, 0.10);

  > .cardImg {
    padding: 10px 30px;
    width: 12rem;
    cursor: pointer;
  }

  .cardDescription{
    height: 60px;
    font-size: 14px;
    cursor: context-menu;
    
    @media (max-width: 768px) {
      font-size: 0.87rem;
    }
  }

  .cardPrice{
    color: #B6116E;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: context-menu;

    strong{
      color: #1D1D1B;
      text-transform: uppercase;
      margin-right: 5px;
      font-size: 0.6875rem;

      @media (max-width: 768px) {
        font-size: 0.6275rem;
      }
    }
  }

  @media (max-width: 424px) {
    width: 9rem;
  }
`

