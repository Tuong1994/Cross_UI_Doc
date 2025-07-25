import { computed } from 'vue'
import { radioCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useRadioCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: radioCatalogIds.BASIC, title: 'Basic' },
    { id: radioCatalogIds.COLOR, title: 'Color' },
    { id: radioCatalogIds.SIZE, title: 'Size' },
    { id: radioCatalogIds.LABEL, title: 'Label' },
  ]

  const apiCatalogs: CatalogItems = [{ id: radioCatalogIds.RADIO_API, title: 'Radio' }];

  const radioCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return radioCatalogs
}

export default useRadioCatalogs
