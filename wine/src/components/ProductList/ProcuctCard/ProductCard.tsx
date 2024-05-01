import * as S from './ProductCard.styles';
import { useRouter } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { ProductCardProps } from './ProductCard.interfaces';
import { Button } from '@/components/Button';
import Image from 'next/image';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { data } = useProduct(product.id);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/product?id=" + product.id)
  }

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem('cart-items');
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === product.id);

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: product.id })
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, quantity: 1, id: product.id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart));
    }
  }

  return (
    <S.Container>
      <S.Card>
        <img className='cardImg' src={product.image_url} alt="product image" onClick={handleNavigate} />
        <h4 className='cardDescription'>{product.name}</h4>
        <p className='cardPrice'><strong>Sócio wine</strong>R${product.price_in_cents}</p>
      </S.Card>
      <Button
        onClick={handleAddToCart}
        $addButton
      >
        Adicionar 
      </Button>
    </S.Container>
  )
}