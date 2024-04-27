'use client'
import { FilterContextProvider } from '@/contexts/FilterContext';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';

interface DefaultProvidersProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: "968px",
  tableBreakpoint: "768px",
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FilterContextProvider>
          {children}
        </FilterContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
