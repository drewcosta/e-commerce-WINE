import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tablets}){
    flex-direction: column;
  }
`

export const CartListContainer = styled.div`
  width: 100%;
  
  h3{
    font-size: ${({ theme }) => theme.fontSizes.text_2xl};
    font-weight: 500;
    text-transform: uppercase;
    line-height: 300%;
    margin-top: 24px;
  }

  p{
    font-size: ${({ theme }) => theme.fontSizes.text_base};
    font-weight: 300;
    line-height: 150%;

    span{
      font-weight: 700;
    }
  }
`
export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 352px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.whiteBasic};

  h3{
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-darker);
    text-transform: uppercase;
  }
`

export const TotalItem = styled.div<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.fontSizes.text_base};
  font-weight: ${props => props.isBold ? '700' : '400'};
  line-height: 150%;
`

export const ShopButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 1.4rem;
    width: 100%;
    
    color: ${({ theme }) => theme.colors.whiteBasic};
    background: ${({ theme }) => theme.colors.greenSuccess};
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    font-weight: 700;
    line-height: 0.97338rem;
    text-transform: uppercase;
    
    border: none;
    border-radius: 0.24338rem;
    box-shadow: 0px 0.9733840227127075px 1.946768045425415px 0px rgba(0, 0, 0, 0.20);
    cursor: pointer;
`

