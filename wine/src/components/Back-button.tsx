import React from 'react'
import styled from 'styled-components'
import backbtn from '../assets/back-button.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props{
  navigate: string
}

export const BackBtn = ({ navigate }: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate)
  }

  return (
    <Button onClick={handleNavigate}>
      <BackImage src={backbtn} alt=''/>
      Voltar
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  color: var(--gray-darker);
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 120%;
`

const BackImage = styled(Image)`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
`
