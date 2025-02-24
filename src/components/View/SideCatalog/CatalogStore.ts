import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Catalog, } from './type'

const useCatalogStore = defineStore('catalog', () => {
  const catalogs = ref<Catalog[]>([])
  const setCatalogs = (items: Catalog[]) => (catalogs.value = items)
  return { catalogs, setCatalogs }
})

export default useCatalogStore
