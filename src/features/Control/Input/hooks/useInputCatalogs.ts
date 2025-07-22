import { computed } from 'vue'
import { inputCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useInputCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: inputCatalogIds.BASIC, title: 'Basic' },
    { id: inputCatalogIds.COLOR, title: 'Color' },
    { id: inputCatalogIds.SIZE, title: 'Size' },
    { id: inputCatalogIds.SHAPE, title: 'Shape' },
    { id: inputCatalogIds.LABEL, title: 'Label' },
  ]

  const apiCatalogs: CatalogItems = [{ id: inputCatalogIds.INPUT_API, title: 'Input' }]

  const inputCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return inputCatalogs
}

export default useInputCatalogs
