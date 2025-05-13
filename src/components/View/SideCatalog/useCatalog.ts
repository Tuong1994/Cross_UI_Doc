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
import useFlexCatalogs from '@/features/Flex/hooks/useFlexCatalogs'
import useSpaceCatalogs from '@/features/Space/hooks/useSpaceCatalogs'
import useBreadcrumbCatalogs from '@/features/Breadcrumb/hooks/useBreadcrumbCatalogs'
import useDropdownCatalogs from '@/features/Dropdown/hooks/useDropdownCatalogs'
import useAvatarCatalogs from '@/features/Avatar/hooks/useAvatarCatalogs'
import useBadgeCatalogs from '@/features/Badge/hooks/useBadgeCatalogs'
import useCardCatalogs from '@/features/Card/hooks/useCardCatalogs'
import useCarouselCatalogs from '@/features/Carousel/hooks/useCarouselCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const buttonCatalogs = useButtonCatalogs()

  const iconCatalogs = useIconCatalogs()

  const typographyCatalogs = useTypographyCatalogs()

  const dividerCatalogs = useDividerCatalogs()

  const flexCatalogs = useFlexCatalogs()

  const gridCatalogs = useGridCatalogs()

  const spaceCatalogs = useSpaceCatalogs()

  const breadcrumbCatalogs = useBreadcrumbCatalogs()

  const dropdownCatalogs = useDropdownCatalogs()

  const paginationCatalogs = usePaginationCatalogs()

  const avatarCatalogs = useAvatarCatalogs()

  const badgeCatalogs = useBadgeCatalogs()

  const cardCatalogs = useCardCatalogs()

  const carouselCatalogs = useCarouselCatalogs()

  const formCatalogs = useFormCatalogs()

  const tableCatalogs = useTableCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.BUTTON) return catalogStore.setCatalogs(buttonCatalogs.value)
    if (routeName === routeNames.ICON) return catalogStore.setCatalogs(iconCatalogs.value)
    if (routeName === routeNames.TYPOGRAPHY) return catalogStore.setCatalogs(typographyCatalogs.value)
    if (routeName === routeNames.DIVIDER) return catalogStore.setCatalogs(dividerCatalogs.value)
    if (routeName === routeNames.FLEX) return catalogStore.setCatalogs(flexCatalogs.value)
    if (routeName === routeNames.GRID) return catalogStore.setCatalogs(gridCatalogs.value)
    if (routeName === routeNames.SPACE) return catalogStore.setCatalogs(spaceCatalogs.value)
    if (routeName === routeNames.BREADCRUMB) return catalogStore.setCatalogs(breadcrumbCatalogs.value)
    if (routeName === routeNames.DROPDOWN) return catalogStore.setCatalogs(dropdownCatalogs.value)
    if (routeName === routeNames.PAGINATION) return catalogStore.setCatalogs(paginationCatalogs.value)
    if (routeName === routeNames.AVATAR) return catalogStore.setCatalogs(avatarCatalogs.value)
    if (routeName === routeNames.BADGE) return catalogStore.setCatalogs(badgeCatalogs.value)
    if (routeName === routeNames.CARD) return catalogStore.setCatalogs(cardCatalogs.value)
    if (routeName === routeNames.CAROUSEL) return catalogStore.setCatalogs(carouselCatalogs.value)
    if (routeName === routeNames.FORM) return catalogStore.setCatalogs(formCatalogs.value)
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
  })
}

export default useCatalog
