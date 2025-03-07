import { computed } from 'vue'
import { paginationCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const usePaginationCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: paginationCatalogIds.BASIC, title: 'Basic' },
    { id: paginationCatalogIds.COLOR, title: 'Color' },
    { id: paginationCatalogIds.SHAPE, title: 'Shape' },
    { id: paginationCatalogIds.GHOST, title: 'Ghost' },
    { id: paginationCatalogIds.SIMPLE, title: 'Simple' }
  ]

  const apiCatalogs: CatalogItems = [{ id: paginationCatalogIds.PAGINATION_API, title: 'Pagination' }]

  const paginationCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return paginationCatalogs
}

export default usePaginationCatalogs
