import { computed } from 'vue'
import { alertCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useAlertCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: alertCatalogIds.BASIC, title: 'Basic' },
    { id: alertCatalogIds.TYPE, title: 'Type' },
    { id: alertCatalogIds.HOOK, title: 'useAlert' },
  ]

  const apiCatalogs: CatalogItems = [{ id: alertCatalogIds.ALERT_API, title: 'Alert' }]

  const alertCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return alertCatalogs
}

export default useAlertCatalogs