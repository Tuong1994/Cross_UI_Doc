import { computed } from 'vue'
import { gridCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useGridCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: gridCatalogIds.BASIC, title: 'Basic' },
    { id: gridCatalogIds.GAP, title: 'Gap' }
  ]

  const apiCatalogs: CatalogItems = [{ id: gridCatalogIds.GRID_API, title: 'Grid' }]

  const gridCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return gridCatalogs
}

export default useGridCatalogs
