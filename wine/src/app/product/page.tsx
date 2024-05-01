'use client'
import * as S from './page.styles';
import { useProduct } from '@/hooks/useProduct';
import { Button } from '@/components/Button';
import { DefaultPageLayout } from '@/components/Layout/DefaultPageLayout';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/functions/AddToCart';
import backbtn from '../../assets/back-button.svg';
import Image from 'next/image';

export default function Product({ searchParams }: { searchParams: { id: string } }) {

  const { data: product } = useProduct(searchParams.id);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  }

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <DefaultPageLayout>
      <S.Container>
        <Button
          $backButton
          onClick={handleNavigate}
        >
          <Image src={backbtn} alt="voltar" />
          Voltar
        </Button>
        <section>
          <img src={product?.image_url} alt="" />
          <div>
            <S.ProductInfo>
              <h2>{product?.name}</h2>
              <span>{product?.category}</span>
              <span>R$ {product?.price_in_cents}</span>
              <div>
                <h3>Descrição</h3>
                <p>{product?.description}</p>
              </div>
            </S.ProductInfo>
            <Button
              $addButton
              onClick={handleAddToCart}
            >
              Adicionar
            </Button>
          </div>
        </section>
      </S.Container>
    </DefaultPageLayout>
  )
}