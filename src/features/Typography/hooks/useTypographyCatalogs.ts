import { computed } from 'vue'
import { typographyCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useTypographyCatalogs = () => {
  const t = useLangStore()

  const exampleCatalogs: CatalogItems = [
    { id: typographyCatalogIds.TITLE_BASIC, title: 'Title basic' },
    { id: typographyCatalogIds.TITLE_LEVEL, title: 'Title level' },
    { id: typographyCatalogIds.TITLE_VARIANT, title: 'Title variant' },
    { id: typographyCatalogIds.TITLE_ALIGNS, title: 'Title aligns' },
    { id: typographyCatalogIds.TITLE_WEIGHT, title: 'Title weight' },
    { id: typographyCatalogIds.TITLE_ITALIC, title: 'Title italic' },
    { id: typographyCatalogIds.TITLE_UNDERLINE, title: 'Title underline' },
    { id: typographyCatalogIds.TITLE_REMOVE, title: 'Title remove' }
  ]

  const apiCatalogs: CatalogItems = [
    { id: typographyCatalogIds.TITLE_API, title: 'Title' },
    { id: typographyCatalogIds.PARAGRAPH_API, title: 'Paragraph' }
  ]

  const typographyCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: exampleCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return typographyCatalogs
}

export default useTypographyCatalogs
