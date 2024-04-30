import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: ${({ theme }) => theme.fontSizes.text_lg};
  line-height: normal;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

export const BoxPrices = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`