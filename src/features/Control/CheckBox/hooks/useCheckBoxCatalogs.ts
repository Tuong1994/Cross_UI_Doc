import { computed } from 'vue'
import { checkboxCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useCheckBoxCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: checkboxCatalogIds.BASIC, title: 'Basic' },
    { id: checkboxCatalogIds.COLOR, title: 'Color' },
    { id: checkboxCatalogIds.SIZE, title: 'Size' },
    { id: checkboxCatalogIds.LABEL, title: 'Label' },
  ]

  const apiCatalogs: CatalogItems = [{ id: checkboxCatalogIds.CHECKBOX_API, title: 'Checkbox' }]

  const checkboxCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return checkboxCatalogs
}

export default useCheckBoxCatalogs
