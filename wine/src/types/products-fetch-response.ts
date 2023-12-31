import { Product } from "./product"

export interface ListMetaData{
  count: number
}

export interface ProductsFetchResponse {
  data: {
    allProducts: Product[]
    _allProductsMeta: ListMetaData
  }
}