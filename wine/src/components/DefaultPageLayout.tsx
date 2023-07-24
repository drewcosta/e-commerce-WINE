import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props{
  children: ReactNode
}

export const DefaultPageLayout = ({ children }: Props) => {
  return (
    <Container>{children}</Container>
  )
}

const Container = styled.div`
  padding: 31px 250px;
  min-height: 100vh;
  background: var(--app-background);

  @media (max-width: 1440px) {
    padding: 31px 70px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

