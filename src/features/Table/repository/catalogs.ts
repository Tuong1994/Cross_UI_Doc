import type { CatalogItems } from "@/components/View/SideCatalog/type"

export const tableCataLogIds = {
  BASIC: 'basic',
  SELECTION: 'selection',
  FILTER: 'filter',
  PAGINATION: 'pagination',
  EXPAND: 'expand'
} as const

export const tableCataLogs: CatalogItems = [
  { id: tableCataLogIds.BASIC, title: 'Basic' },
  { id: tableCataLogIds.SELECTION, title: 'Selection' },
  { id: tableCataLogIds.FILTER, title: 'Filter' },
  { id: tableCataLogIds.PAGINATION, title: 'Pagination' },
  { id: tableCataLogIds.EXPAND, title: 'Expand Table' }
]
