import { computed } from 'vue'
import { toastCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useToastCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: toastCatalogIds.BASIC, title: 'Basic' },
    { id: toastCatalogIds.TYPE, title: 'Type' },
    { id: toastCatalogIds.HOOK, title: 'useMessage' }
  ]

  const apiCatalogs: CatalogItems = [{ id: toastCatalogIds.TOAST_API, title: 'Toast' }]

  const toastCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return toastCatalogs
}

export default useToastCatalogs
