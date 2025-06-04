import { computed } from 'vue'
import { accordionCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useAccordionCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: accordionCatalogIds.BASIC, title: 'Basic' },
    { id: accordionCatalogIds.LABEL_ICON, title: 'Label icon' },
    { id: accordionCatalogIds.EXTRA_ICON, title: 'Extra icon' },
    { id: accordionCatalogIds.BORDERED, title: 'Bordered' },
    { id: accordionCatalogIds.GROUP, title: 'Group' },
  ]

  const apiCatalogs: CatalogItems = [{ id: accordionCatalogIds.ACCORDION_API, title: 'Accordion' }]

  const accordionCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return accordionCatalogs
}

export default useAccordionCatalogs
