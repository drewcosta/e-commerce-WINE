"use client"
import { FilterContextProvider } from '@/contexts/FilterContext';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { DefaultTheme } from '@/styles/themes/DefaultTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';
import { DefaultProvidersProps } from './DefaultProviders.interfaces';

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <FilterContextProvider>
          {children}
        </FilterContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}