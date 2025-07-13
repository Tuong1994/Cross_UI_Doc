import { computed } from 'vue'
import { listCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useListCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: listCatalogIds.BASIC, title: 'Basic' },
    { id: listCatalogIds.HEAD, title: 'Header' },
    { id: listCatalogIds.ICON, title: 'Icon' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: listCatalogIds.LIST_API, title: 'List' },
    { id: listCatalogIds.LIST_ITEM_API, title: 'List Item' }
  ]

  const listCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return listCatalogs
}

export default useListCatalogs
