import styled from "styled-components";

export const Container = styled.div`
  padding: 31px 250px;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundColors.backgroundApp};

  @media (max-width: 1440px) {
    padding: 31px 70px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`