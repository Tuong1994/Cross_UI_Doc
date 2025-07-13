import { computed } from 'vue'
import { spaceCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useSpaceCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: spaceCatalogIds.BASIC, title: 'Basic' },
    { id: spaceCatalogIds.JUSTIFY, title: 'Justify' },
    { id: spaceCatalogIds.ALIGNS, title: 'Aligns' },
    { id: spaceCatalogIds.SIZE, title: 'Size' },
  ]

  const apiCatalogs: CatalogItems = [{ id: spaceCatalogIds.SPACE_API, title: 'Space' }]

  const spaceCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return spaceCatalogs
}

export default useSpaceCatalogs
