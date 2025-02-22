import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CatalogItems } from './type'

const useCatalogStore = defineStore('catalog', () => {
  const catalogs = ref<CatalogItems>([])
  const setCatalogs = (items: CatalogItems) => (catalogs.value = items)
  return { catalogs, setCatalogs }
})

export default useCatalogStore
