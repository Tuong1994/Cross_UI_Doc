import { computed } from 'vue'
import { tooltipCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useTooltipCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: tooltipCatalogIds.BASIC, title: 'Basic' },
    { id: tooltipCatalogIds.COLOR, title: 'Color' },
    { id: tooltipCatalogIds.PLACEMENT, title: 'Placement' }
  ]

  const apiCatalogs: CatalogItems = [{ id: tooltipCatalogIds.TOOLTIP_API, title: 'Tooltip' }]

  const tooltipCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return tooltipCatalogs
}

export default useTooltipCatalogs
