import { computed } from 'vue'
import { bgFloatingCatalogIds } from '../repository/catelogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useBgFloatingCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: bgFloatingCatalogIds.BASIC, title: 'Basic' },
    { id: bgFloatingCatalogIds.COLOR, title: 'Color' },
    { id: bgFloatingCatalogIds.SHAPE, title: 'Shape' }
  ]

  const apiCatalogs: CatalogItems = [{ id: bgFloatingCatalogIds.BG_FLOATING_API, title: 'Floating' }]

  const bgFloatingCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return bgFloatingCatalogs
}

export default useBgFloatingCatalogs
