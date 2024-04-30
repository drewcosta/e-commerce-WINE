import * as S from './Store.styles'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import storeIcon from '../../../../assets/store-icon.svg'

export const Store = () => {
  const router = useRouter();
  const { value } = useLocalStorage('cart-items', []);

  const handleNavigateToCart = () => {
    router.push('/cart');
  }

  return (
    <S.Container onClick={handleNavigateToCart}>
      <S.StoreIcon src={storeIcon} alt='store icon' height={48} />
      {value.length >= 0 && <S.StoreCount>{value.length}</S.StoreCount>}
    </S.Container>
  )
}