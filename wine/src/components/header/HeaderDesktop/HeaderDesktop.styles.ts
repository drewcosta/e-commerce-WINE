import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;

  border-bottom: 2px solid #CCCCCC;
  background: #FFFFFF;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 42px;

    @media (max-width: 1024px) {
      gap: 20px;
    }
  }

  @media (max-width: 1440px) {
    padding: 0px 70px;
  }
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;
