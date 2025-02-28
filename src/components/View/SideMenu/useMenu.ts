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
        { id: routeNames.BUTTON, label: 'Button', path: '/' },
        { id: routeNames.ICON, label: 'Icon', path: '/' },
        { id: routeNames.TYPOGRAPHY, label: 'Typography', path: '/' }
      ]
    },
    {
      id: 'layout',
      category: t.lang.menu.layout,
      items: [
        { id: routeNames.DIVIDER, label: 'Divider', path: '/' },
        { id: routeNames.FLEX, label: 'Flex', path: '/' },
        { id: routeNames.GRID, label: 'Grid', path: '/' },
        { id: routeNames.LAYOUT, label: 'Layout', path: '/' },
        { id: routeNames.SPACE, label: 'Space', path: '/' }
      ]
    },
    {
      id: 'navigation',
      category: t.lang.menu.navigation,
      items: [
        { id: routeNames.BREADCRUMB, label: 'Breadcrumb', path: '/' },
        { id: routeNames.DROPDOWN, label: 'Dropdown', path: '/' },
        { id: routeNames.PAGINATION, label: 'Pagination', path: routePaths.PAGINATION }
      ]
    },
    {
      id: 'dataEntry',
      category: t.lang.menu.dataEntry,
      items: [
        { id: routeNames.FORM, label: 'Form', path: '/' },
        { id: routeNames.INPUT, label: 'Input', path: '/' },
        { id: routeNames.INPUT_NUMBER, label: 'Input Number', path: '/' },
        { id: routeNames.INPUT_PHONE, label: 'Input Phone', path: '/' },
        { id: routeNames.INPUT_PASSWORD, label: 'Input Password', path: '/' },
        { id: routeNames.TEXTAREA, label: 'Textarea', path: '/' },
        { id: routeNames.SELECT, label: 'Select', path: '/' },
        { id: routeNames.SELECT_TAG, label: 'Select Tag', path: '/' },
        { id: routeNames.TREE_SELECT, label: 'Tree Select', path: '/' },
        { id: routeNames.DATEPICKER, label: 'Datepicker', path: '/' },
        { id: routeNames.CHECKBOX, label: 'Checkbox', path: '/' },
        { id: routeNames.RADIO, label: 'Radio', path: '/' },
        { id: routeNames.UPLOAD, label: 'Upload', path: '/' }
      ]
    },
    {
      id: 'dataDisplay',
      category: t.lang.menu.dataDisplay,
      items: [
        { id: routeNames.AVATAR, label: 'Avatar', path: '/' },
        { id: routeNames.BADGE, label: 'Badge', path: '/' },
        { id: routeNames.CARD, label: 'Card', path: '/' },
        { id: routeNames.CAROUSEL, label: 'Carousel', path: '/' },
        { id: routeNames.IMAGE, label: 'Image', path: '/' },
        { id: routeNames.LIST, label: 'List', path: '/' },
        { id: routeNames.TABLE, label: 'Table', path: routePaths.TABLE },
        { id: routeNames.TOOLTIP, label: 'Tooltip', path: '/' },
        { id: routeNames.TABS, label: 'Tabs', path: routeNames.TABS },
        { id: routeNames.ACCORDION, label: 'Accordion', path: '/' }
      ]
    },
    {
      id: 'feedback',
      category: t.lang.menu.feedback,
      items: [
        { id: routeNames.ALERT, label: 'Alert', path: '/' },
        { id: routeNames.MESSAGE, label: 'Message', path: '/' },
        { id: routeNames.DRAWER, label: 'Drawer', path: '/' },
        { id: routeNames.MODAL, label: 'Modal', path: '/' },
        { id: routeNames.LOADING, label: 'Loading', path: '/' }
      ]
    }
  ])

  return menus
}

export default useMenu
