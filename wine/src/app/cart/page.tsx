'use client'
import { BackBtn } from '@/components/Back-button'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import { Divider } from '@/components/Divider'
import { CartItems } from '@/components/cart/cart-items'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/product'
import styled from 'styled-components'

export default function CartPage(){
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = calculateTotal(value).toFixed(2)
  const delivery = 100
  const cartTotalWithDelivery = calculateTotal(value) + delivery

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if( item.id != id) return item
      return {...item, quantity: quantity}
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if( item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate='/' />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span> R$ {cartTotal}</span>
          </p>
          <CartList>
            {value.map(item => 
              <CartItems 
                product={item} 
                key={item.id} 
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            )}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
            <h3>Resumo do pedido</h3>
            <TotalItem>
              <p>Subtotal de produtos</p>
              <p>{cartTotal}</p>
            </TotalItem>
            <TotalItem>
              <p>Entrega</p>
              <p>{delivery}.00</p>
            </TotalItem>
            <Divider />
            <TotalItem isBold>
              <p>Total</p>
              {value.length > 0 ? <p>{cartTotalWithDelivery}</p> : '0.00'}
            </TotalItem>
            <ShopButton>finalizar compra</ShopButton>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;

  @media(max-width: ${props => props.theme.tableBreakpoint}){
    flex-direction: column;
  }
`

const CartListContainer = styled.div`
  width: 100%;
  
  h3{
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 300%;
    margin-top: 24px;
  }

  p{
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;

    span{
      font-weight: 700;
    }
  }
`
const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 352px;
  padding: 16px 24px;
  background: white;

  h3{
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-darker);
    text-transform: uppercase;
  }
`

const TotalItem = styled.div<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  font-size: 16px;
  font-weight: ${props => props.isBold ? '700' : '400'};
  line-height: 150%;
`

const ShopButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 1.4rem;
    width: 100%;
    
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

