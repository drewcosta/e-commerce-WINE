import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 8px 18px;
  background: ${({ theme }) => theme.backgroundColors.backgroundApp};

  & > div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled(Image)`
  cursor: pointer;

  @media (max-width: 425px) {
    height: 26px;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;