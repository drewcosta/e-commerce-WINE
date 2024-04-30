import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.greyStronger};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablets}) {
    border: none;
  }
`
export const SearchIcon = styled(Image)`
  cursor: pointer;
  padding: 5px;
`