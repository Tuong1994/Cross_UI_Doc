import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/UI/Table/hooks/useTableCatalogs'
import useTabsCatalogs from '@/features/UI/Tabs/hooks/useTabsCatalogs'
import useButtonCatalogs from '@/features/UI/Button/hooks/useButtonCatalogs'
import useGridCatalogs from '@/features/UI/Grid/hooks/useGridCatalogs'
import usePaginationCatalogs from '@/features/UI/Pagination/hooks/usePaginationCatalogs'
import useIconCatalogs from '@/features/UI/Icon/hooks/useIconCatalogs'
import useFormCatalogs from '@/features/Control/Form/hooks/useFormCatalogs'
import useTypographyCatalogs from '@/features/UI/Typography/hooks/useTypographyCatalogs'
import useDividerCatalogs from '@/features/UI/Divider/hooks/useDividerCatalogs'
import useFlexCatalogs from '@/features/UI/Flex/hooks/useFlexCatalogs'
import useSpaceCatalogs from '@/features/UI/Space/hooks/useSpaceCatalogs'
import useBreadcrumbCatalogs from '@/features/UI/Breadcrumb/hooks/useBreadcrumbCatalogs'
import useDropdownCatalogs from '@/features/UI/Dropdown/hooks/useDropdownCatalogs'
import useAvatarCatalogs from '@/features/UI/Avatar/hooks/useAvatarCatalogs'
import useBadgeCatalogs from '@/features/UI/Badge/hooks/useBadgeCatalogs'
import useCardCatalogs from '@/features/UI/Card/hooks/useCardCatalogs'
import useCarouselCatalogs from '@/features/UI/Carousel/hooks/useCarouselCatalogs'
import useImageCatalogs from '@/features/UI/Image/hooks/useImageCatalogs'
import useListCatalogs from '@/features/UI/List/hooks/useListCatalogs'
import useTooltipCatalogs from '@/features/UI/Tooltip/hooks/useTooltipCatalogs'
import useAccordionCatalogs from '@/features/UI/Accordion/hooks/useAccordionCatalogs'
import useAlertCatalogs from '@/features/UI/Alert/hooks/useAlertCatalogs'
import useToastCatalogs from '@/features/UI/ToastMessage/hooks/useToastCatalogs'
import useDrawerCatalogs from '@/features/UI/Drawer/hooks/useDrawerCatalogs'
import useModalCatalogs from '@/features/UI/Modal/hooks/useModalCatalogs'
import useLoadingCatalogs from '@/features/UI/Loading/hooks/useLoadingCatalogs'
import useSelectCatalogs from '@/features/Control/Select/hooks/useSelectCatalogs'
import useInputCatalogs from '@/features/Control/Input/hooks/useInputCatalogs'
import useTextAreaCatalogs from '@/features/Control/TextArea/hooks/useTextAreaCatalogs'
import useDatepickerCatalogs from '@/features/Control/DatePicker/hooks/useDatepickerCatalogs'
import useCheckBoxCatalogs from '@/features/Control/CheckBox/hooks/useCheckBoxCatalogs'
import useRadioCatalogs from '@/features/Control/Radio/hooks/useRadioCatalogs'
import useUploadCatalogs from '@/features/Control/Upload/hooks/useUploadCatalogs'
import useLayoutCatalogs from '@/features/UI/Layout/hooks/useLayoutCatalogs'
import useSwitchCatalogs from '@/features/UI/Switch/hooks/useSwitchCatalogs'
import useBgFloatingCatalogs from '@/features/UI/BgFloating/hooks/useBgFloatingCatalogs'
import useBgParticlesCatalogs from '@/features/UI/BgParticles/hooks/useBgParticlesCatalogs'
import useDynamicGridCatalogs from '@/features/UI/DynamicGrid/hooks/useDynamicGridCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const buttonCatalogs = useButtonCatalogs()

  const switchCatalogs = useSwitchCatalogs()

  const iconCatalogs = useIconCatalogs()

  const typographyCatalogs = useTypographyCatalogs()

  const dividerCatalogs = useDividerCatalogs()

  const flexCatalogs = useFlexCatalogs()

  const gridCatalogs = useGridCatalogs()

  const dynamicGridCatalogs = useDynamicGridCatalogs()

  const layoutCatalogs = useLayoutCatalogs()

  const spaceCatalogs = useSpaceCatalogs()

  const breadcrumbCatalogs = useBreadcrumbCatalogs()

  const dropdownCatalogs = useDropdownCatalogs()

  const paginationCatalogs = usePaginationCatalogs()

  const avatarCatalogs = useAvatarCatalogs()

  const badgeCatalogs = useBadgeCatalogs()

  const cardCatalogs = useCardCatalogs()

  const carouselCatalogs = useCarouselCatalogs()

  const imageCatalogs = useImageCatalogs()

  const listCatalogs = useListCatalogs()

  const tableCatalogs = useTableCatalogs()

  const tooltipCatalogs = useTooltipCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  const accordionCatalogs = useAccordionCatalogs()

  const alertCatalogs = useAlertCatalogs()

  const toastCatalogs = useToastCatalogs()

  const drawerCatalogs = useDrawerCatalogs()

  const modalCatalogs = useModalCatalogs()

  const loadingCatalogs = useLoadingCatalogs()

  const formCatalogs = useFormCatalogs()

  const inputCatalogs = useInputCatalogs()

  const textareaCatalogs = useTextAreaCatalogs()

  const selectCatalogs = useSelectCatalogs()

  const datepickerCatalogs = useDatepickerCatalogs()

  const checkboxCatalogs = useCheckBoxCatalogs()

  const radioCatalogs = useRadioCatalogs()

  const uploadCatalogs = useUploadCatalogs()

  const bgFloatingCatalogs = useBgFloatingCatalogs()

  const bgParticlesCatalogs = useBgParticlesCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.BUTTON) return catalogStore.setCatalogs(buttonCatalogs.value)
    if (routeName === routeNames.SWITCH) return catalogStore.setCatalogs(switchCatalogs.value)
    if (routeName === routeNames.ICON) return catalogStore.setCatalogs(iconCatalogs.value)
    if (routeName === routeNames.TYPOGRAPHY) return catalogStore.setCatalogs(typographyCatalogs.value)
    if (routeName === routeNames.DIVIDER) return catalogStore.setCatalogs(dividerCatalogs.value)
    if (routeName === routeNames.FLEX) return catalogStore.setCatalogs(flexCatalogs.value)
    if (routeName === routeNames.GRID) return catalogStore.setCatalogs(gridCatalogs.value)
    if (routeName === routeNames.DYNAMIC_GRID) return catalogStore.setCatalogs(dynamicGridCatalogs.value)
    if (routeName === routeNames.LAYOUT) return catalogStore.setCatalogs(layoutCatalogs.value)
    if (routeName === routeNames.SPACE) return catalogStore.setCatalogs(spaceCatalogs.value)
    if (routeName === routeNames.BREADCRUMB) return catalogStore.setCatalogs(breadcrumbCatalogs.value)
    if (routeName === routeNames.DROPDOWN) return catalogStore.setCatalogs(dropdownCatalogs.value)
    if (routeName === routeNames.PAGINATION) return catalogStore.setCatalogs(paginationCatalogs.value)
    if (routeName === routeNames.AVATAR) return catalogStore.setCatalogs(avatarCatalogs.value)
    if (routeName === routeNames.BADGE) return catalogStore.setCatalogs(badgeCatalogs.value)
    if (routeName === routeNames.CARD) return catalogStore.setCatalogs(cardCatalogs.value)
    if (routeName === routeNames.CAROUSEL) return catalogStore.setCatalogs(carouselCatalogs.value)
    if (routeName === routeNames.IMAGE) return catalogStore.setCatalogs(imageCatalogs.value)
    if (routeName === routeNames.LIST) return catalogStore.setCatalogs(listCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
    if (routeName === routeNames.TOOLTIP) return catalogStore.setCatalogs(tooltipCatalogs.value)
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.ACCORDION) return catalogStore.setCatalogs(accordionCatalogs.value)
    if (routeName === routeNames.ALERT) return catalogStore.setCatalogs(alertCatalogs.value)
    if (routeName === routeNames.MESSAGE) return catalogStore.setCatalogs(toastCatalogs.value)
    if (routeName === routeNames.DRAWER) return catalogStore.setCatalogs(drawerCatalogs.value)
    if (routeName === routeNames.MODAL) return catalogStore.setCatalogs(modalCatalogs.value)
    if (routeName === routeNames.LOADING) return catalogStore.setCatalogs(loadingCatalogs.value)
    if (routeName === routeNames.FORM) return catalogStore.setCatalogs(formCatalogs.value)
    if (routeName === routeNames.INPUT) return catalogStore.setCatalogs(inputCatalogs.value)
    if (routeName === routeNames.TEXTAREA) return catalogStore.setCatalogs(textareaCatalogs.value)
    if (routeName === routeNames.SELECT) return catalogStore.setCatalogs(selectCatalogs.value)
    if (routeName === routeNames.DATEPICKER) return catalogStore.setCatalogs(datepickerCatalogs.value)
    if (routeName === routeNames.CHECKBOX) return catalogStore.setCatalogs(checkboxCatalogs.value)
    if (routeName === routeNames.RADIO) return catalogStore.setCatalogs(radioCatalogs.value)
    if (routeName === routeNames.UPLOAD) return catalogStore.setCatalogs(uploadCatalogs.value)
    if (routeName === routeNames.BG_FLOATING) return catalogStore.setCatalogs(bgFloatingCatalogs.value)
    if (routeName === routeNames.BG_PARTICLES) return catalogStore.setCatalogs(bgParticlesCatalogs.value)
  })
}

export default useCatalog
