import { FilterTypes } from "@/types/filter-types";
import { PriorityPrices } from "@/types/priority-prices";

export function getCategoryByType(type: FilterTypes | string) {
  if (type == FilterTypes.BRANCO) return 'branco'
  if (type == FilterTypes.ESPUMANTE) return 'espumante'
  if (type == FilterTypes.ROSE) return 'rosé'
  if (type == FilterTypes.TINTO) return 'tinto'
  return ''
}

export function getFieldByPriority(priority: PriorityPrices | string) {
  if (priority == PriorityPrices.MINOR_PRICE) return { field: 'price_in_cents', order: 'ASC' }
  if (priority == PriorityPrices.BIGGEST_PRICE) return { field: 'price_in_cents', order: 'DSC' }
  return { field: 'sales' }
}

export const mountQuery = (type: FilterTypes | string) => {
  if (!type) {
    return `
  query($page: Int, $perPage: Int, $sortField: String, $sortOrder: String){
    allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder){
      id
      name
      price_in_cents
      image_url
      category
    }
    _allProductsMeta {
      count
    }
  }
  `
  }


  return `
  query($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $categoryFilter: String){
    allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter:{category: $categoryFilter}){
      id
      name
      price_in_cents
      image_url
      category
    }
    _allProductsMeta {
      count
    }
  }
  `
}