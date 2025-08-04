import { computed } from 'vue'
import { tableCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useTableCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: tableCatalogIds.BASIC, title: 'Basic' },
    { id: tableCatalogIds.SELECTION, title: 'Selection' },
    { id: tableCatalogIds.FILTER, title: 'Filter' },
    { id: tableCatalogIds.PAGINATION, title: 'Pagination' },
    { id: tableCatalogIds.EXPAND, title: 'Expand Table' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: tableCatalogIds.TABLE_API, title: 'Table' },
    { id: tableCatalogIds.COLUMN_API, title: 'Column' },
    { id: tableCatalogIds.TABLE_FILTER_API, title: 'Table filter' },
    { id: tableCatalogIds.COMPONENT_API, title: 'Table Component' },
  ]

  const tableCataLogs = computed<Catalog[]>(() => [
    {
      id: 'examples',
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
