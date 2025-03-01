import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/Table/hooks/useTableCatalogs'
import useTabsCatalogs from '@/features/Tabs/hooks/useTabsCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const tableCatalogs = useTableCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
  })
}

export default useCatalog
