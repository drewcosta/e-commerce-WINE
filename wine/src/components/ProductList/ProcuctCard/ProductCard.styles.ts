import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.91rem;
  cursor: pointer;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 12rem;
  height: 20rem;
  
  background: ${({ theme }) => theme.colors.whiteBasic};
  box-shadow: 0px 9.733839988708496px 14.600760459899902px 0px rgba(0, 0, 0, 0.10);

  .cardImg {
    padding: 10px 30px;
    width: 12rem;
    cursor: pointer;
  }

  .cardDescription{
    height: 60px;
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    cursor: context-menu;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablets}) {
      font-size: 0.87rem;
    }
  }

  .cardPrice{
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    cursor: context-menu;

    strong{
      color: ${({ theme }) => theme.colors.blackAlitteLight};
      text-transform: uppercase;
      margin-right: 5px;
      font-size: 0.6875rem;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablets}) {
        font-size: 0.6275rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 9rem;
  }
`