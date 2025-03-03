import { computed } from 'vue'
import { routeNames, routePaths } from '@/router'
import type { SideMenuItems } from './type'
import useLangStore from '@/stores/LangStore'

const useMenu = () => {
  const t = useLangStore()

  const menus = computed<SideMenuItems>(() => [
    {
      id: 'general',
      category: t.lang.menu.general,
      items: [
        { id: routeNames.BUTTON, label: 'Button', path: routePaths.BUTTON },
        { id: routeNames.ICON, label: 'Icon', path: routePaths.ICON },
        { id: routeNames.TYPOGRAPHY, label: 'Typography', path: routePaths.TYPOGRAPHY }
      ]
    },
    {
      id: 'layout',
      category: t.lang.menu.layout,
      items: [
        { id: routeNames.DIVIDER, label: 'Divider', path: routePaths.DIVIDER },
        { id: routeNames.FLEX, label: 'Flex', path: routePaths.FLEX },
        { id: routeNames.GRID, label: 'Grid', path: routePaths.GRID },
        { id: routeNames.LAYOUT, label: 'Layout', path: routePaths.LAYOUT },
        { id: routeNames.SPACE, label: 'Space', path: routePaths.SPACE }
      ]
    },
    {
      id: 'navigation',
      category: t.lang.menu.navigation,
      items: [
        { id: routeNames.BREADCRUMB, label: 'Breadcrumb', path: routePaths.BREADCRUMB },
        { id: routeNames.DROPDOWN, label: 'Dropdown', path: routePaths.DROPDOWN },
        { id: routeNames.PAGINATION, label: 'Pagination', path: routePaths.PAGINATION }
      ]
    },
    {
      id: 'dataEntry',
      category: t.lang.menu.dataEntry,
      items: [
        { id: routeNames.FORM, label: 'Form', path: routePaths.FORM },
        { id: routeNames.INPUT, label: 'Input', path: routePaths.INPUT },
        { id: routeNames.INPUT_NUMBER, label: 'Input Number', path: routePaths.INPUT_NUMBER },
        { id: routeNames.INPUT_PHONE, label: 'Input Phone', path: routePaths.INPUT_PHONE },
        { id: routeNames.INPUT_PASSWORD, label: 'Input Password', path: routePaths.INPUT_PASSWORD },
        { id: routeNames.TEXTAREA, label: 'Textarea', path: routePaths.TEXTAREA },
        { id: routeNames.SELECT, label: 'Select', path: routePaths.SELECT },
        { id: routeNames.SELECT_TAG, label: 'Select Tag', path: routePaths.SELECT_TAG },
        { id: routeNames.TREE_SELECT, label: 'Tree Select', path: routePaths.TREE_SELECT },
        { id: routeNames.DATEPICKER, label: 'Datepicker', path: routePaths.DATEPICKER },
        { id: routeNames.CHECKBOX, label: 'Checkbox', path: routePaths.CHECKBOX },
        { id: routeNames.RADIO, label: 'Radio', path: routePaths.RADIO },
        { id: routeNames.UPLOAD, label: 'Upload', path: routePaths.UPLOAD }
      ]
    },
    {
      id: 'dataDisplay',
      category: t.lang.menu.dataDisplay,
      items: [
        { id: routeNames.AVATAR, label: 'Avatar', path: routePaths.AVATAR },
        { id: routeNames.BADGE, label: 'Badge', path: routePaths.BADGE },
        { id: routeNames.CARD, label: 'Card', path: routePaths.CARD },
        { id: routeNames.CAROUSEL, label: 'Carousel', path: routePaths.CAROUSEL },
        { id: routeNames.IMAGE, label: 'Image', path: routePaths.IMAGE },
        { id: routeNames.LIST, label: 'List', path: routePaths.LIST },
        { id: routeNames.TABLE, label: 'Table', path: routePaths.TABLE },
        { id: routeNames.TOOLTIP, label: 'Tooltip', path: routePaths.TOOLTIP },
        { id: routeNames.TABS, label: 'Tabs', path: routeNames.TABS },
        { id: routeNames.ACCORDION, label: 'Accordion', path: routePaths.ACCORDION }
      ]
    },
    {
      id: 'feedback',
      category: t.lang.menu.feedback,
      items: [
        { id: routeNames.ALERT, label: 'Alert', path: routePaths.ALERT },
        { id: routeNames.MESSAGE, label: 'Message', path: routePaths.MESSAGE },
        { id: routeNames.DRAWER, label: 'Drawer', path: routePaths.DRAWER },
        { id: routeNames.MODAL, label: 'Modal', path: routePaths.MODAL },
        { id: routeNames.LOADING, label: 'Loading', path: routePaths.LOADING }
      ]
    }
  ])

  return menus
}

export default useMenu
