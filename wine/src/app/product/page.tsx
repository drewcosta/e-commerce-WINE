'use client'
import { BackBtn } from '@/components/Back-button'
import { CartAddButton } from '@/components/Cart-add-button'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import { useProduct } from '@/hooks/useProduct'
import styled from 'styled-components'

export default function Product({searchParams}: { searchParams: { id: string }}) {

  const { data } = useProduct(searchParams.id)

  console.log(data)

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} alt="" />
          <div>
            <ProductInfo>
              <h2>{data?.name}</h2>
              <span>{data?.category}</span>
              <span>R$ {data?.price_in_cents}</span>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            {/* <CartAddButton /> */}
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40rem;
          height: 36.25rem;
          padding: 0.0625rem 8.125rem 0rem 8.0625rem;
          flex-shrink: 0;
        }
        
        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 114%;
      font-style: normal;
      color: var(--gray-darker);
      margin-top: 12px;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 171%;
      font-style: normal;
      color: var(--gray-default);
    }

    span:nth-of-type(2){
      font-size: 20px;
      font-weight: 600;
      color: var(--light-tannat);
      margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: (--text-dark);
    }

    div {
        margin-top: 24px;

        h3 {
          font-size: 1rem;
          font-weight: 400;
          line-height: 150%;
          text-transform: capitalize;
          color: var(--gray-darker);
        }

        p {
            font-size: 14px;
        }
    }
`

