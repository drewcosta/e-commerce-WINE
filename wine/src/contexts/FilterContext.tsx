'use client'
import { ReactNode, createContext, useState } from 'react'
import { PriorityPrices } from '@/types/priority-prices'
import { FilterTypes } from '@/types/filter-types'

export const FilterContext = createContext({
  search: '',
  currentPage: 0,
  perPage: 0,
  type: '',
  priority: '',
  setPriority: (value: PriorityPrices) => {},
  setSearch: (value: string) => {},
  setCurrentPage: (value: number) => {},
  setPerPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

export const FilterContextProvider = ({children}: ProviderProps) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(10);
  const [type, setType] = useState('')
  const [priority, setPriority] = useState(PriorityPrices.MINOR_PRICE)

  return (
    <FilterContext.Provider 
      value={{
        search,
        currentPage,
        perPage,
        type,
        priority,
        setPriority,
        setSearch,
        setCurrentPage,
        setPerPage,
        setType,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

