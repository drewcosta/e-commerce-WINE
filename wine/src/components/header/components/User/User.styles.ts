import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 2px solid var(--gray-default);
`

export const UserIcon = styled(Image)`
    position: relative;
    top: 5px;
    cursor: pointer;
`
