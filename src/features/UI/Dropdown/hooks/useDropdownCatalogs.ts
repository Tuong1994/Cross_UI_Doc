import { computed } from 'vue'
import { dropdownCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useDropdownCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: dropdownCatalogIds.BASIC, title: 'Basic' },
    { id: dropdownCatalogIds.PLACEMENT, title: 'Placement' },
    { id: dropdownCatalogIds.TRIGGER, title: 'Trigger' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: dropdownCatalogIds.DROPDOWN_API, title: 'Dropdown' },
    { id: dropdownCatalogIds.DROPDOWN_ITEM_API, title: 'Dropdown Item' }
  ]

  const dropdownCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return dropdownCatalogs
}

export default useDropdownCatalogs
