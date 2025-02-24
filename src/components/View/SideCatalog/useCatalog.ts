import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/Table/hooks/useTableCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const tableCataLogs = useTableCatalogs()

  watchEffect(() => {
    if (currentRoute.value.name === routeNames.TABLE) return catalogStore.setCatalogs(tableCataLogs.value)
  })
}

export default useCatalog
