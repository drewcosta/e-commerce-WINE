import styled from "styled-components";
import { FilterSideBarStyles } from "./FilterSideBar.interfaces";

export const Container = styled.aside<FilterSideBarStyles>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  h2{
    color: ${({ theme }) => theme.colors.black};
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.text_lg};
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablets}){
      text-align: center;
      width: inherit;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.Mobile}){
    display: ${({ showOnMobile }) => showOnMobile ? 'flex' : 'none'};
    width: 100%;
    padding: 10px;
  }
`

