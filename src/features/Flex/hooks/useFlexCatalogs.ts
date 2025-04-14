import { computed } from 'vue'
import { flexCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useFlexCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: flexCatalogIds.BASIC, title: 'Basic' },
    { id: flexCatalogIds.JUSTIFY, title: 'Justify' },
    { id: flexCatalogIds.ALIGNS, title: 'Aligns' },
    { id: flexCatalogIds.GUTTERS, title: 'Gutters' },
  ]

  const apiCatalogs: CatalogItems = [{ id: flexCatalogIds.FLEX_API, title: 'Flex' }]

  const flexCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return flexCatalogs
}

export default useFlexCatalogs
