import { computed } from 'vue'
import { textareaCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useTextAreaCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: textareaCatalogIds.BASIC, title: 'Basic' },
    { id: textareaCatalogIds.COLOR, title: 'Color' },
    { id: textareaCatalogIds.SIZE, title: 'Size' },
    { id: textareaCatalogIds.SHAPE, title: 'Shape' },
    { id: textareaCatalogIds.LABEL, title: 'Label' },
  ]

  const apiCatalogs: CatalogItems = [{ id: textareaCatalogIds.TEXTAREA_API, title: 'TextArea' }]

  const textareaCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return textareaCatalogs
}

export default useTextAreaCatalogs
