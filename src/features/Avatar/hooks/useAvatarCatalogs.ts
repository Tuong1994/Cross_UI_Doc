import { computed } from 'vue'
import { avatarCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useAvatarCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: avatarCatalogIds.BASIC, title: 'Basic' },
    { id: avatarCatalogIds.COLOR, title: 'Color' },
    { id: avatarCatalogIds.SIZE, title: 'Size' },
    { id: avatarCatalogIds.SHAPE, title: 'Shape' },
    { id: avatarCatalogIds.BADGE, title: 'Badge' },
    { id: avatarCatalogIds.DOT, title: 'Dot' },
    { id: avatarCatalogIds.LETTER, title: 'Letter' }
  ]

  const apiCatalogs: CatalogItems = [{ id: avatarCatalogIds.AVATAR_API, title: 'Avatar' }]

  const avatarCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return avatarCatalogs
}

export default useAvatarCatalogs
