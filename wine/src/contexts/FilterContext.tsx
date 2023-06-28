import { ReactNode, createContext, useState } from 'react'
import { PriorityPrices } from '@/types/priority-prices'
import { FilterTypes } from '@/types/filter-types'

const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityPrices['até R$40'],
  setPriority: (value: PriorityPrices) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
})

interface ProviderProps{
  children: ReactNode
}

const FilterContextProvider = ({children}: ProviderProps) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterTypes.ALL)
  const [priority, setPriority] = useState(PriorityPrices['até R$40'])

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

export default FilterContextProvider