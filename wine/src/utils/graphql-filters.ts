import { FilterTypes } from "@/types/FilterTypes.enum";
import { PriorityPrices } from "@/types/PriorityPrices.enum";
import { PriceRange } from "@/types/PriceRange.enum";

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
  return { field: 'price_in_cents', order: 'ASC' }
}

export function getPriceRange(priceRange: PriceRange | string) {
  if (priceRange == PriceRange.ATE40) return { price_in_cents_lte: 40 }
  if (priceRange == PriceRange.R40A60) return { price_in_cents_gte: 40, price_in_cents_lte: 60 }
  if (priceRange == PriceRange.R60A100) return { price_in_cents_gte: 60, price_in_cents_lte: 100 }
  if (priceRange == PriceRange.R100A200) return { price_in_cents_gte: 100, price_in_cents_lte: 200 }
  if (priceRange == PriceRange.R200A500) return { price_in_cents_gte: 200, price_in_cents_lte: 500 }
  if (priceRange == PriceRange.ACIMA500) return { price_in_cents_gte: 500 }
  return ''
}

export const mountQuery = (type: FilterTypes | string) => {
  if (!type) {
    return `
  query($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $price_in_cents_lte: Int, $price_in_cents_gte: Int){
    allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter:{price_in_cents_lte: $price_in_cents_lte, price_in_cents_gte: $price_in_cents_gte}){
      id
      name
      price_in_cents
      image_url
      category
    }
    _allProductsMeta(filter:{price_in_cents_lte: $price_in_cents_lte, price_in_cents_gte: $price_in_cents_gte}) {
      count
    }
  }
  `
  }

  return `
  query($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $categoryFilter: String, $price_in_cents_lte: Int, $price_in_cents_gte: Int){
    allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter:{category: $categoryFilter, price_in_cents_lte: $price_in_cents_lte, price_in_cents_gte: $price_in_cents_gte}){
      id
      name
      price_in_cents
      image_url
      category
    }
    _allProductsMeta(filter:{category: $categoryFilter, price_in_cents_lte: $price_in_cents_lte, price_in_cents_gte: $price_in_cents_gte}) {
      count
    }
  }
  `
}