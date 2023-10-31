import { FilterTypes } from "@/types/filter-types";
import { PriorityPrices } from "@/types/priority-prices";

export function getCategoryByType(type: FilterTypes | string){
  if(type == FilterTypes.BRANCO) return 'branco'
  if(type == FilterTypes.ESPUMANTE) return 'espumante'
  if(type == FilterTypes.ROSE) return 'rosé'
  if(type == FilterTypes.TINTO) return 'tinto'
  return ''
}

export function getFieldByPriority(priority: PriorityPrices){
  if(priority == PriorityPrices.MINOR_PRICE) return {field: 'price_in_cents', order: 'ASC'}
  if(priority == PriorityPrices.BIGGEST_PRICE) return {field: 'price_in_cents', order: 'DSC'}
}


export const mountQuery = (type: FilterTypes | string, priority: PriorityPrices) => {
  if (!type && !priority) return `query{
    allProducts(sortField:"price_in_cents", sortOrder: "ASC" ){
      id
      name
      price_in_cents
      image_url
    }
  }
`
  
const sortSettings = getFieldByPriority(priority)
const categoryFilter = getCategoryByType(type)

  return `
  query{
    allProducts(sortField: "${sortSettings?.field}", sortOrder: "${sortSettings?.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}){
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `
}