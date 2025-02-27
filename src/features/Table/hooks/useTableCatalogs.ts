import { computed } from 'vue'
import { tableCataLogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

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
    { id: tableCataLogIds.COLUMN_API, title: 'Column' },
    { id: tableCataLogIds.COMPONENT_API, title: 'Table Component' }
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
