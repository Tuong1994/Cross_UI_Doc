import { computed } from 'vue'
import { carouselCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useCarouselCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: carouselCatalogIds.BASIC, title: 'Basic' },
    { id: carouselCatalogIds.INFINITE, title: 'Infinite' },
    { id: carouselCatalogIds.AUTO_PLAY, title: 'Auto play' },
    { id: carouselCatalogIds.VERTICAL, title: 'Vertical' },
    { id: carouselCatalogIds.PRODUCT, title: 'Product' },
    { id: carouselCatalogIds.GALLERY, title: 'Gallery' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: carouselCatalogIds.CAROUSEL_API, title: 'Carousel' },
    { id: carouselCatalogIds.CAROUSEL_PRODUCT_API, title: 'Carousel product' },
    { id: carouselCatalogIds.CAROUSEL_ITEM_API, title: 'Carousel Item' },
  ]

  const carouselCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return carouselCatalogs
}

export default useCarouselCatalogs
