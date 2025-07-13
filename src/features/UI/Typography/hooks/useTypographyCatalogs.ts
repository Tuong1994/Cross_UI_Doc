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
    { id: typographyCatalogIds.TITLE_REMOVE, title: 'Title remove' },
    { id: typographyCatalogIds.PARAGRAPH_BASIC, title: 'Paragraph basic' },
    { id: typographyCatalogIds.PARAGRAPH_SIZE, title: 'Paragraph size' },
    { id: typographyCatalogIds.PARAGRAPH_STRONG, title: 'Paragraph strong' },
    { id: typographyCatalogIds.PARAGRAPH_MARK, title: 'Paragraph mark' },
    { id: typographyCatalogIds.PARAGRAPH_LINE_HEIGHT, title: 'Paragraph line height' },
    { id: typographyCatalogIds.PARAGRAPH_VARIANT, title: 'Paragraph variant' },
    { id: typographyCatalogIds.PARAGRAPH_ALIGNS, title: 'Paragraph aligns' },
    { id: typographyCatalogIds.PARAGRAPH_WEIGHT, title: 'Paragraph weight' },
    { id: typographyCatalogIds.PARAGRAPH_ITALIC, title: 'Paragraph italic' },
    { id: typographyCatalogIds.PARAGRAPH_UNDERLINE, title: 'Paragraph underline' },
    { id: typographyCatalogIds.PARAGRAPH_REMOVE, title: 'Paragraph remove' }
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
