import { computed } from 'vue'
import { loadingCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useLoadingCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: loadingCatalogIds.SPINNER_BASIC, title: 'Spinner basic' },
    { id: loadingCatalogIds.SPINNER_COLOR, title: 'Spinner color' },
    { id: loadingCatalogIds.SPINNER_SIZE, title: 'Spinner size' },
    { id: loadingCatalogIds.SPINNER_TYPE, title: 'Spinner type' }
  ]

  const apiCatalogs: CatalogItems = [{ id: loadingCatalogIds.SPINNER_API, title: 'Spinner API' }]

  const loadingCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return loadingCatalogs
}

export default useLoadingCatalogs
