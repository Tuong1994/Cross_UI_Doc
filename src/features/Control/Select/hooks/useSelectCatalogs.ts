import { computed } from 'vue'
import { selectCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useSelectCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: selectCatalogIds.BASIC, title: 'Basic' },
    { id: selectCatalogIds.COLOR, title: 'Color' },
    { id: selectCatalogIds.SIZE, title: 'Size' },
    { id: selectCatalogIds.SHAPE, title: 'Shape' },
    { id: selectCatalogIds.LABEL, title: 'Label' },
    { id: selectCatalogIds.PAGING, title: 'Paging' },
    { id: selectCatalogIds.LOADING, title: 'Loading' },
    { id: selectCatalogIds.DISABLED, title: 'Disabled' },
  ]

  const apiCatalogs: CatalogItems = [{ id: selectCatalogIds.SELECT_API, title: 'Select' }]

  const selectCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return selectCatalogs
}

export default useSelectCatalogs
