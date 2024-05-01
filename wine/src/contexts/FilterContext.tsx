"use client"
import { ReactNode, createContext, useState } from 'react'
import { PriorityPrices } from '@/types/PriorityPrices.enum'
import { IFilterContext } from '@/types/FilterContext.interface'

export const FilterContext = createContext({} as IFilterContext);

interface ProviderProps {
  children: ReactNode
}

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [type, setType] = useState('')
  const [priority, setPriority] = useState(PriorityPrices.MINOR_PRICE)
  const [priceRange, setPriceRange] = useState('')

  return (
    <FilterContext.Provider
      value={{
        search,
        currentPage,
        perPage,
        type,
        priority,
        priceRange,
        setPriority,
        setSearch,
        setCurrentPage,
        setPerPage,
        setType,
        setPriceRange,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

