import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/Table/hooks/useTableCatalogs'
import useTabsCatalogs from '@/features/Tabs/hooks/useTabsCatalogs'
import useButtonCatalogs from '@/features/Button/hooks/useButtonCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const buttonCatalogs = useButtonCatalogs()

  const tableCatalogs = useTableCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.BUTTON) return catalogStore.setCatalogs(buttonCatalogs.value)
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
  })
}

export default useCatalog
