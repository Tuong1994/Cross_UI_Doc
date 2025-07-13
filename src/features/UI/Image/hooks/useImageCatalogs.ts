import { computed } from 'vue'
import { imageCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useImageCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: imageCatalogIds.BASIC, title: 'Basic' },
    { id: imageCatalogIds.SIZE, title: 'Size' },
    { id: imageCatalogIds.OBJECT_FIT, title: 'Object fit' },
    { id: imageCatalogIds.FEATURES, title: 'Features' }
  ]

  const apiCatalogs: CatalogItems = [{ id: imageCatalogIds.IMAGE_API, title: 'Image' }]

  const imageCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return imageCatalogs
}

export default useImageCatalogs
