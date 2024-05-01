'use client'
import * as S from './page.styles';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProductInCart } from '@/types/Product.interfaces';
import { useRouter } from 'next/navigation';
import backbtn from '../../assets/back-button.svg';
import Image from 'next/image';
import { DefaultPageLayout } from '@/components/Layout/DefaultPageLayout';
import { CartItem } from './components/';

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", []);

  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  }

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = calculateTotal(value).toFixed(2)
  const delivery = 100
  const cartTotalWithDelivery = calculateTotal(value) + delivery

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id != id) return item
      return { ...item, quantity: quantity }
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <S.Container>
        <S.CartListContainer>
          <Button
            $backButton
            onClick={handleNavigate}
          >
            <Image src={backbtn} alt="voltar" />
            Voltar
          </Button>

          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span> R$ {cartTotal}</span>
          </p>
          <S.CartList>
            {value.map(item =>
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            )}
          </S.CartList>
        </S.CartListContainer>
        <S.CartResultContainer>
          <h3>Resumo do pedido</h3>
          <S.TotalItem>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </S.TotalItem>
          <S.TotalItem>
            <p>Entrega</p>
            <p>{delivery}.00</p>
          </S.TotalItem>
          <Divider />
          <S.TotalItem isBold>
            <p>Total</p>
            {value.length > 0 ? <p>{cartTotalWithDelivery}</p> : '0.00'}
          </S.TotalItem>
          <Button
            $addButton
          >
            Finalizar compra
          </Button>
        </S.CartResultContainer>
      </S.Container>
    </DefaultPageLayout>
  )
}

