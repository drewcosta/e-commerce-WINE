'use client'
import { ReactNode, createContext, useState } from 'react'
import { PriorityPrices } from '@/types/priority-prices'
import { FilterTypes } from '@/types/filter-types'

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: '',
  priority: '',
  setPriority: (value: PriorityPrices) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

export const FilterContextProvider = ({children}: ProviderProps) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState('')
  const [priority, setPriority] = useState('')

  return (
    <FilterContext.Provider 
      value={{
        search,
        page,
        type,
        priority,
        setPriority,
        setSearch,
        setPage,
        setType,
      }}>
      {children}
    </FilterContext.Provider>
  )
}
