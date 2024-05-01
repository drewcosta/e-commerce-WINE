import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 0;
`
export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 3px 6px;

  font-size: 11px;
  color: ${({ theme }) => theme.colors.whiteBasic};
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 3px;
`

export const Span = styled.span`
  font-size: 8px;
  cursor: pointer;
`
