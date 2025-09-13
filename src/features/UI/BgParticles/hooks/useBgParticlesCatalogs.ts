import { computed } from 'vue'
import { bgParticlesCatalogIds } from '../repository/catalogIds'
import type { Catalog, CatalogItems } from '@/components/View/SideCatalog/type'
import useLangStore from '@/stores/LangStore'

const useBgParticlesCatalogs = () => {
  const t = useLangStore()

  const examplesCatalogs: CatalogItems = [
    { id: bgParticlesCatalogIds.BASIC, title: 'Basic' },
    { id: bgParticlesCatalogIds.COLOR, title: 'Color' },
    { id: bgParticlesCatalogIds.OPTION, title: 'Option' }
  ]

  const apiCatalogs: CatalogItems = [{ id: bgParticlesCatalogIds.BG_PARTICLES_API, title: 'Particles' }]

  const bgParticlesCatalogs = computed<Catalog[]>(() => [
    { id: 'examples', groupTitle: t.lang.common.examples, items: examplesCatalogs },
    { id: 'api', groupTitle: 'API', items: apiCatalogs }
  ])

  return bgParticlesCatalogs
}

export default useBgParticlesCatalogs
