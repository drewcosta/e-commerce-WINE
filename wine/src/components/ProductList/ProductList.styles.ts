import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid #b6b3b3e6;
  padding-bottom: 15px;
`

export const Title = styled.h3`
  > span:nth-child(2){
    font-weight: normal;  
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    color: ${({ theme }) => theme.colors.greyStronger};
  }
`
