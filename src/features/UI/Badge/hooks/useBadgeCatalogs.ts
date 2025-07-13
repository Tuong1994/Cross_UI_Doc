import { computed } from 'vue'
import { badgeCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useBadgeCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: badgeCatalogIds.BASIC, title: 'Basic' },
    { id: badgeCatalogIds.COLOR, title: 'Color' },
    { id: badgeCatalogIds.GHOST, title: 'Ghost' },
    { id: badgeCatalogIds.SHAPE, title: 'Shape' }
  ]

  const apiCatalogs: CatalogItems = [{ id: badgeCatalogIds.BADGE_API, title: 'Badge' }]

  const badgeCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return badgeCatalogs
}

export default useBadgeCatalogs
