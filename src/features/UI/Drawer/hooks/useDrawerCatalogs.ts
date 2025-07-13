import { computed } from 'vue'
import { drawerCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useDrawerCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: drawerCatalogIds.BASIC, title: 'Basic' },
    { id: drawerCatalogIds.FULL, title: 'Full size' },
    { id: drawerCatalogIds.NO_HEAD, title: 'No header' },
  ]

  const apiCatalogs: CatalogItems = [{ id: drawerCatalogIds.DRAWER_API, title: 'Drawer' }]

  const drawerCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return drawerCatalogs
}

export default useDrawerCatalogs
