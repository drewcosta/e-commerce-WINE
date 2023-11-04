import { useFilter } from "@/hooks/useFilter"
import { usePagination } from "@/hooks/usePagination"
import styled from "styled-components"

export const Pagination = () => {
  const { currentPage } = useFilter()
  const { goToPage, totalPage } = usePagination()


  return (
    <PaginationWrapper>
      {Array.from({ length: totalPage }, (_,index) => (
        <PaginationItem
          key={index}
          selected={currentPage === index}
          onClick={() => goToPage(index)}
        >{index + 1}</PaginationItem>
      ))}
    </PaginationWrapper>
  )
}

interface PaginationProps {
  selected: boolean,
}

const PaginationWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  list-style: none;
`

const PaginationItem = styled.li<PaginationProps>`
  border: 1px solid var(--light-tannat);
  border-radius: 4px;

  padding: 5px;
  height: 40px;
  width: 40px;

  text-align: center;
  vertical-align: center;
  cursor: pointer;


  color: ${props => props.selected ? 'white' : 'var(--light-tannat)'};
  background-color: ${props => props.selected ? 'var(--light-tannat)' : 'none'};

  &:hover{
    color: white;
    background-color: var(--light-tannat);
  }
`