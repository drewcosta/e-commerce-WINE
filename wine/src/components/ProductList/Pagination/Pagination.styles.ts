import styled from "styled-components";
import { PaginationStyles } from "./Pagination.interfaces";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  list-style: none;
`

export const Pages = styled.li<PaginationStyles>`
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 4px;

  padding: 5px;
  height: 40px;
  width: 40px;

  text-align: center;
  vertical-align: center;
  cursor: pointer;

  color: ${({ theme, $selected }) => $selected ? theme.colors.whiteBasic : theme.colors.pink};
  background-color: ${({ theme, $selected }) => $selected ? theme.colors.pink : 'none'};

  &:hover{
    color: white;
    background-color: ${({ theme }) => theme.colors.pink};
  }
`