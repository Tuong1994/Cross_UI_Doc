import { computed } from 'vue'
import { uploadCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useUploadCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: uploadCatalogIds.SINGLE_IMAGE_UPLOAD_BASIC, title: 'Sgl-img upload basic' },
    { id: uploadCatalogIds.SINGLE_IMAGE_UPLOAD_COLOR, title: 'Sgl-img upload color' },
    { id: uploadCatalogIds.SINGLE_IMAGE_UPLOAD_SHAPE, title: 'Sgl-img upload shape' },
    { id: uploadCatalogIds.MULTI_IMAGE_UPLOAD_BASIC, title: 'Multi-img upload basic' },
    { id: uploadCatalogIds.FILES_UPLOAD_BASIC, title: 'Files upload basic' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: uploadCatalogIds.SINGLE_IMAGE_UPLOAD_API, title: 'Sgl-img upload' },
    { id: uploadCatalogIds.MULTI_IMAGE_UPLOAD_API, title: 'Multi-img upload' },
    { id: uploadCatalogIds.FILES_UPLOAD_API, title: 'Files upload' }
  ]

  const uploadCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return uploadCatalogs
}

export default useUploadCatalogs
