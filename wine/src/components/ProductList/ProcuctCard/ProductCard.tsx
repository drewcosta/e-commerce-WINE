import * as S from './ProductCard.styles';
import { useRouter } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { ProductCardProps } from './ProductCard.interfaces';
import { Button } from '@/components/Button';
import { addToCart } from '@/functions/AddToCart';

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/product?id=" + product.id)
  }

  function handleAddToCart() {
    addToCart(product);
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