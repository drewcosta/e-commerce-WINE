import * as S from './CartItem.styles';
import { ChangeEvent } from "react";
import { CartItemProps } from "./CartItem.interfaces";

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <S.Container>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        X
      </button>
      <img src={product.image_url} alt="" />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <S.Select value={product.quantity} name="" id="" onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </S.Select>
          <span>R$ {product.price_in_cents}</span>
        </div>
      </div>
    </S.Container>
  )
}