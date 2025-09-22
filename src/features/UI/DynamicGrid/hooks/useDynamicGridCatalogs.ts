import { computed } from 'vue'
import { dynamicGridCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useDynamicGridCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: dynamicGridCatalogIds.BASIC, title: 'Basic' },
    { id: dynamicGridCatalogIds.ITEMS, title: 'Items' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: dynamicGridCatalogIds.DYNAMIC_GRID_API, title: 'DynamicGrid' },
    { id: dynamicGridCatalogIds.DYNAMIC_GRID_ITEM_API, title: 'DynamicGridItem' },
  ]

  const dynamicCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return dynamicCatalogs
}

export default useDynamicGridCatalogs
