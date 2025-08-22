import { computed } from 'vue'
import { switchCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useSwitchCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: switchCatalogIds.BASIC, title: 'Basic' },
    { id: switchCatalogIds.COLOR, title: 'Color' },
    { id: switchCatalogIds.SIZE, title: 'Size' },
  ]

  const apiCatalogs: CatalogItems = [{ id: switchCatalogIds.SWITCH_API, title: 'Switch' }]

  const switchCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return switchCatalogs
}

export default useSwitchCatalogs
