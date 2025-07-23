import { computed } from 'vue'
import { datepickerCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useDatepickerCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: datepickerCatalogIds.BASIC, title: 'Basic' },
    { id: datepickerCatalogIds.COLOR, title: 'Color' },
    { id: datepickerCatalogIds.SIZE, title: 'Size' },
    { id: datepickerCatalogIds.SHAPE, title: 'Shape' },
    { id: datepickerCatalogIds.LABEL, title: 'Label' },
    { id: datepickerCatalogIds.MIN_MAX, title: 'Min/Max' },
  ]

  const apiCatalogs: CatalogItems = [{ id: datepickerCatalogIds.DATEPICKER_API, title: 'Datepicker' }]

  const datepickerCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return datepickerCatalogs
}

export default useDatepickerCatalogs
