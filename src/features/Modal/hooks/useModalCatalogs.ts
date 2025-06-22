import { computed } from 'vue'
import { modalCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useModalCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [{ id: modalCatalogIds.BASIC, title: 'Basic' }]

  const apiCatalogs: CatalogItems = [{ id: modalCatalogIds.MODAL_API, title: 'Modal' }]

  const modalCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return modalCatalogs
}

export default useModalCatalogs
