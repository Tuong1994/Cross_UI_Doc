import { computed } from 'vue'
import { tabsCatalogIds } from '../respository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useTabsCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: tabsCatalogIds.BASIC, title: 'Basic' },
    { id: tabsCatalogIds.VERTICAL, title: 'Vertical' }
  ]

  const tabsCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs }
  ])

  return tabsCatalogs
}

export default useTabsCatalogs
