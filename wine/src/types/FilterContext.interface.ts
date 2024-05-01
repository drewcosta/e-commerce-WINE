import { PriorityPrices } from "./PriorityPrices.enum";

export interface IFilterContext {
  search: string,
  currentPage: number,
  perPage: number,
  type: string,
  priority: string,
  priceRange: string,
  setPriority: (value: PriorityPrices) => void,
  setSearch: (value: string) => void,
  setCurrentPage: (value: number) => void,
  setPerPage: (value: number) => void,
  setType: (value: string) => void,
  setPriceRange: (value: string) => void,
}