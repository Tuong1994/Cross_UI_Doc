import { computed } from 'vue'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

export const tableCataLogIds = {
  BASIC: 'basic',
  SELECTION: 'selection',
  FILTER: 'filter',
  PAGINATION: 'pagination',
  EXPAND: 'expand',
  TABLE_API: 'Table',
  COLUMN_API: 'Column'
} as const

const useTableCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: tableCataLogIds.BASIC, title: 'Basic' },
    { id: tableCataLogIds.SELECTION, title: 'Selection' },
    { id: tableCataLogIds.FILTER, title: 'Filter' },
    { id: tableCataLogIds.PAGINATION, title: 'Pagination' },
    { id: tableCataLogIds.EXPAND, title: 'Expand Table' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: tableCataLogIds.TABLE_API, title: 'Table' },
    { id: tableCataLogIds.COLUMN_API, title: 'Column' }
  ]

  const tableCataLogs = computed<Catalog[]>(() => [
    {
      id: 'example',
      groupTitle: t.lang.common.examples,
      items: exampleCatalogs
    },
    {
      id: 'api',
      groupTitle: 'API',
      items: apiCatalogs
    }
  ])

  return tableCataLogs
}

export default useTableCatalogs
