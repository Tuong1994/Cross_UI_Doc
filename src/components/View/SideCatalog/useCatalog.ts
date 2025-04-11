import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/Table/hooks/useTableCatalogs'
import useTabsCatalogs from '@/features/Tabs/hooks/useTabsCatalogs'
import useButtonCatalogs from '@/features/Button/hooks/useButtonCatalogs'
import useGridCatalogs from '@/features/Grid/hooks/useGridCatalogs'
import usePaginationCatalogs from '@/features/Pagination/hooks/usePaginationCatalogs'
import useIconCatalogs from '@/features/Icon/hooks/useIconCatalogs'
import useFormCatalogs from '@/features/Form/hooks/useFormCatalogs'
import useTypographyCatalogs from '@/features/Typography/hooks/useTypographyCatalogs'
import useDividerCatalogs from '@/features/Divider/hooks/useDividerCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const buttonCatalogs = useButtonCatalogs()

  const iconCatalogs = useIconCatalogs()

  const typographyCatalogs = useTypographyCatalogs()

  const dividerCatalogs = useDividerCatalogs()

  const gridCatalogs = useGridCatalogs()

  const paginationCatalogs = usePaginationCatalogs()

  const formCatalogs = useFormCatalogs()

  const tableCatalogs = useTableCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.BUTTON) return catalogStore.setCatalogs(buttonCatalogs.value)
    if (routeName === routeNames.ICON) return catalogStore.setCatalogs(iconCatalogs.value)
    if (routeName === routeNames.TYPOGRAPHY) return catalogStore.setCatalogs(typographyCatalogs.value)
    if (routeName === routeNames.DIVIDER) return catalogStore.setCatalogs(dividerCatalogs.value)
    if (routeName === routeNames.GRID) return catalogStore.setCatalogs(gridCatalogs.value)
    if (routeName === routeNames.PAGINATION) return catalogStore.setCatalogs(paginationCatalogs.value)
    if (routeName === routeNames.FORM) return catalogStore.setCatalogs(formCatalogs.value)
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
  })
}

export default useCatalog
