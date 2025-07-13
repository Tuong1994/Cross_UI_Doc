import { computed } from 'vue'
import { cardCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useCardCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: cardCatalogIds.BASIC, title: 'Basic' },
    { id: cardCatalogIds.HEAD, title: 'Head' },
    { id: cardCatalogIds.HOVERABLE, title: 'Hoverable' }
  ]

  const apiCatalogs: CatalogItems = [{ id: cardCatalogIds.CARD_API, title: 'Card' }]

  const cardCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return cardCatalogs
}

export default useCardCatalogs
