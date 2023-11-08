import styled from "styled-components";

export const ContainerAdvancedSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px){
    width: 100%;
  }
`

export const AdvancedSearchTitle = styled.h3`
  font-size: 1.2rem;
  line-height: normal;
  color: #333333;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;  
`

export const AdvancedSearchList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`