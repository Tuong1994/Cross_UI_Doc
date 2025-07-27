import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import { layoutCatalogIds } from '../repository/catalogIds'
import useLangStore from '@/stores/LangStore'
import { computed } from 'vue'

const useLayoutCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: layoutCatalogIds.BASIC, title: 'Basic' },
    { id: layoutCatalogIds.HOOK, title: 'useLayoutStore' },
  ]

  const apiCatalogs: CatalogItems = [
    { id: layoutCatalogIds.CONTAINER_API, title: 'Container' },
    { id: layoutCatalogIds.HEAD_API, title: 'Head' },
    { id: layoutCatalogIds.BODY_API, title: 'Body' },
    { id: layoutCatalogIds.SIDE_API, title: 'Side' },
    { id: layoutCatalogIds.CONTENT_API, title: 'Content' },
    { id: layoutCatalogIds.MENU_API, title: 'Menu' },
    { id: layoutCatalogIds.MENU_ITEM_API, title: 'MenuItem' },
  ]

  const layoutCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return layoutCatalogs
}

export default useLayoutCatalogs
