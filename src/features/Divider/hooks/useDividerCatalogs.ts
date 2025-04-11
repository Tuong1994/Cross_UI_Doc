import { computed } from 'vue'
import { dividerCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useDividerCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [{ id: dividerCatalogIds.BASIC, title: 'Basic' }]

  const apiCatalogs: CatalogItems = [{ id: dividerCatalogIds.DIVIDER_API, title: 'Divider' }]

  const dividerCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return dividerCatalogs
}

export default useDividerCatalogs
