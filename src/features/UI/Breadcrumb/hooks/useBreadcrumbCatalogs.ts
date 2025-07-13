import { computed } from 'vue'
import { breadcrumbCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useBreadcrumbCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: breadcrumbCatalogIds.BASIC, title: 'Basic' },
    { id: breadcrumbCatalogIds.ICON, title: 'Icon' },
    { id: breadcrumbCatalogIds.LINK, title: 'Link' },
    { id: breadcrumbCatalogIds.SEPARATOR, title: 'Separator' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: breadcrumbCatalogIds.BREADCRUMB_API, title: 'Breadcrumb' },
    { id: breadcrumbCatalogIds.BREADCRUMB_ITEM_API, title: 'Breadcrumb Item' },
  ]

  const breadcrumbCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return breadcrumbCatalogs
}

export default useBreadcrumbCatalogs
