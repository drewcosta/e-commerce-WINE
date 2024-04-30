import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.backgroundColors.backgroundLogo};
  background: ${({ theme }) => theme.backgroundColors.backgroundLogo};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  
  cursor: pointer;  
`

export const StoreCount = styled.span`
  position: absolute;
  left: 64.29%;
  right: 0%;
  top: 64.29%;
  bottom: 0%;

  display: flex;
  justify-content: center;
  align-items: center;

  Width: 20px;
  Height:20px;
   
  background-color: white;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.turquoise};
  z-index: 1;
`

export const StoreIcon = styled(Image)`
  position: absolute;
`