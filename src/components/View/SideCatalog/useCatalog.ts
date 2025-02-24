import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import { tableCataLogs } from '@/features/Table/repository/catalogs'
import useCatalogStore from './CatalogStore'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  watch(
    currentRoute,
    (newRoute) => {
      if (newRoute.name === routeNames.TABLE) return catalogStore.setCatalogs(tableCataLogs)
    },
    { immediate: true }
  )
}

export default useCatalog
