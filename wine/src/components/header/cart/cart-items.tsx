import { ProductInCart } from '@/types/product'
import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

interface CartProps{
  product: ProductInCart
  handleUpdateQuantity: (id: string, quantity: number) => void
  handleDelete: (id: string) => void
}

export const CartItems = ({ product, handleUpdateQuantity, handleDelete }: CartProps) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        X
      </button>
      <img src={product.image_url} alt="" />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} name="" id="" onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>R$ {product.price_in_cents}</span>
        </div>
      </div>
    </Item>
  )
}

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 210px;
  width: 100%;

  border-radius: 8px;
  background-color: white;

  img{
    max-height: 100%;
    width: 8rem;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 16px 24px;

    line-height: 150%;
    color: var(--gray-darker);

    h4{
      font-size: 20px;
      font-weight: 300;
    }

    p{
      font-size: 12px;
      font-weight: 400;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span{
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  button {
        position: absolute;
        top: 16px;
        right: 24px;

        border: none;
        background: transparent;
        cursor: pointer;
    }
`

const SelectQuantity = styled.select`
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  border: 1.5px solid var(--gray-default);
  color: var(--gray-default);
  background-color: var(--app-background);
`

