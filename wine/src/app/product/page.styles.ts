import styled from "styled-components";

export const Container = styled.div`
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

    @media(max-width: 768px){
      padding: 25px 50px;

      section{
        img{
          width: 13.625rem;
          height: 20.8125rem;
          padding: 0;
          flex-shrink: 0;
        }
      }
    }

    @media(max-width: 425px){
      padding: 25px 8px;

      section{
        flex-direction: column;
        align-items: center;

        img{
          width: 13.625rem;
          height: 20.8125rem;
          padding: 0;
          flex-shrink: 0;
        }

        > div {
          gap: 30px;
        }
      }
    }
`

export const ProductInfo = styled.div`
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
      font-family: Neo Sans Std;
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

    > div {
        margin-top: 24px;

        h3 {
          color: var(--gray-darker);
          font-family: Neo Sans Std;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 700;
          line-height: 1.5rem;
        }

        p {
            font-size: 14px;
        }
    }
`