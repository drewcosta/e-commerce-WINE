import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 210px;
  width: 100%;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteBasic};

  img{
    max-height: 100%;
    width: 8rem;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 16px 24px;

    line-height: 150%;
    color: ${({ theme }) => theme.colors.greyDark};

    h4{
      font-size: ${({ theme }) => theme.fontSizes.text_lg};
      font-weight: 300;
    }

    p{
      font-size: ${({ theme }) => theme.fontSizes.text_sm};
      font-weight: 400;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span{
        font-size: ${({ theme }) => theme.fontSizes.text_base};
        font-weight: 600;
      }
    }
  }

  button {
        position: absolute;
        top: 16px;
        right: 24px;

        border: none;
        background: transparent;
        cursor: pointer;
    }
`

export const Select = styled.select`
  padding: 8px;
  font-size:  ${({ theme }) => theme.fontSizes.text_base};
  font-weight: 400;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.greyStronger};
  color: ${({ theme }) => theme.colors.greyStronger};
  background-color: ${({ theme }) => theme.backgroundColors.backgroundApp};
`