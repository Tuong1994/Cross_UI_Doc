import { computed } from 'vue'
import { formCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useFormCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: formCatalogIds.BASIC, title: 'Basic' },
    { id: formCatalogIds.COLOR, title: 'Color' },
    { id: formCatalogIds.SIZE, title: 'Size' },
    { id: formCatalogIds.SHAPE, title: 'Shape' },
    { id: formCatalogIds.REQUIRED, title: 'Required' },
    { id: formCatalogIds.DISABLED, title: 'Disabled' },
  ]

  const apiCatalogs: CatalogItems = [{ id: formCatalogIds.FORM_API, title: 'Form' }]

  const formCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return formCatalogs
}

export default useFormCatalogs
