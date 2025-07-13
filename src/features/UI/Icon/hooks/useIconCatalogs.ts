import { computed } from 'vue'
import { iconCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useIconCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [{ id: iconCatalogIds.BASIC, title: 'Basic' }]

  const apiCatalogs: CatalogItems = [
    { id: iconCatalogIds.ICON_USAGE, title: 'Add icon' },
    { id: iconCatalogIds.ICON_API, title: 'Icon' }
  ]

  const iconCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return iconCatalogs
}

export default useIconCatalogs
