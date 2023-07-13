import { FilterTypes } from "@/types/filter-types";

export function getCategoryByType(type: FilterTypes | string){
  if(type == FilterTypes.BRANCO) return 'branco'
  if(type == FilterTypes.ESPUMANTE) return 'espumante'
  if(type == FilterTypes.ROSE) return 'rose'
  if(type == FilterTypes.TINTO) return 'tinto'
  return ''
}