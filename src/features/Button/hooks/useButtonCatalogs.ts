import { computed } from 'vue'
import { buttonCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useButtonCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: buttonCatalogIds.BASIC, title: 'Basic' },
    { id: buttonCatalogIds.COLOR, title: 'Color' },
    { id: buttonCatalogIds.SIZE, title: 'Size' },
    { id: buttonCatalogIds.SHAPE, title: 'Shape' },
    { id: buttonCatalogIds.GHOST, title: 'Ghost' },
    { id: buttonCatalogIds.LOADING, title: 'Loading' },
    { id: buttonCatalogIds.DISABLED, title: 'Disabled' },
    { id: buttonCatalogIds.TEXT, title: 'Text' },
  ]

  const apiCatalogs: CatalogItems = [{ id: buttonCatalogIds.BUTTON_API, title: 'Button' }]

  const buttonCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return buttonCatalogs
}

export default useButtonCatalogs
