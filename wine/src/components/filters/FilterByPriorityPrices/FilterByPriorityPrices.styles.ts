import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

h3{
    font-size: 15px;
    line-height: normal;
    color: ${({ theme }) => theme.colors.greyDark};
    font-weight: 500;
    text-transform: capitalize;
  }

  @media (max-width: 425px) {
    h3{
      display: none;
    }
  }
`

export const BoxPriorityPrices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 4px;
`