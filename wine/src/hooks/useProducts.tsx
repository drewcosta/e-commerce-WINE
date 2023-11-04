import { ProductsFetchResponse } from "@/types/products-fetch-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { getCategoryByType, getFieldByPriority, mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string, variables: {}): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query, variables });
}

export function useProducts() {
  const { type, priority, search, currentPage, perPage } = useFilter()

  const variables = {
    page: currentPage,
    perPage: perPage,
    sortField: getFieldByPriority(priority).field,
    sortOrder: getFieldByPriority(priority).order,
    categoryFilter: getCategoryByType(type),
  }

  const SearchDeferred = useDeferredValue(search)
  const query = mountQuery(type)


  const { data } = useQuery({
    queryFn: () => fetcher(query, variables),
    queryKey: ['products', type, priority, currentPage],
    staleTime: 1000 * 60 * 1,
  })

  const products = data?.data?.data?.allProducts
  const totalCount = data?.data.data._allProductsMeta.count
  const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(SearchDeferred.toLowerCase()))

  return {
    data: filteredProducts, 
    totalCount
  }
}
