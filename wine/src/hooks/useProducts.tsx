import { ProductsFetchResponse } from "@/types/ProductsFetchResponse.interfaces";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { getCategoryByType, getFieldByPriority, getPriceRange, mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string, variables: {}): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query, variables });
}

export function useProducts() {
  const { type, priority, search, currentPage, perPage, priceRange } = useFilter()

  const variables = {
    page: currentPage,
    perPage: perPage,
    sortField: getFieldByPriority(priority).field,
    sortOrder: getFieldByPriority(priority).order,
    categoryFilter: getCategoryByType(type),
    price_in_cents_lte: getPriceRange(priceRange)?.price_in_cents_lte,
    price_in_cents_gte: getPriceRange(priceRange)?.price_in_cents_gte
  }

  const SearchDeferred = useDeferredValue(search)
  const query = mountQuery(type)


  const { data } = useQuery({
    queryFn: () => fetcher(query, variables),
    queryKey: ['products', type, priority, currentPage, priceRange],
    staleTime: 1000 * 60 * 1,
  })

  const products = data?.data?.data?.allProducts
  const totalCount = data?.data.data._allProductsMeta.count
  const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(SearchDeferred.toLowerCase()))

  console.log(filteredProducts)

  return {
    data: filteredProducts, 
    totalCount
  }
}
