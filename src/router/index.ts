import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routePaths = {
  HOME: '/',
  BUTTON: '/button',
  ICON: '/icon',
  TYPOGRAPHY: '/typography',
  DIVIDER: '/divider',
  FLEX: '/flex',
  GRID: '/grid',
  LAYOUT: '/layout',
  SPACE: '/space',
  BREADCRUMB: '/breadcrumb',
  DROPDOWN: '/dropdown',
  PAGINATION: '/pagination',
  FORM: '/form',
  INPUT: '/input',
  TEXTAREA: '/textarea',
  SELECT: '/select',
  DATEPICKER: '/datepicker',
  CHECKBOX: '/checkbox',
  RADIO: '/radio',
  UPLOAD: '/upload',
  AVATAR: '/avatar',
  BADGE: '/badge',
  CARD: '/card',
  CAROUSEL: '/carousel',
  IMAGE: '/image',
  LIST: '/list',
  TABLE: '/table',
  TOOLTIP: '/tooltip',
  TABS: '/tabs',
  ACCORDION: '/accordion',
  ALERT: '/alert',
  MESSAGE: '/message',
  DRAWER: '/drawer',
  MODAL: '/modal',
  LOADING: '/loading'
}

export const routeNames = {
  HOME: 'home',
  BUTTON: 'button',
  ICON: 'icon',
  TYPOGRAPHY: 'typography',
  DIVIDER: 'divider',
  FLEX: 'flex',
  GRID: 'grid',
  LAYOUT: 'layout',
  SPACE: 'space',
  BREADCRUMB: 'breadcrumb',
  DROPDOWN: 'dropdown',
  PAGINATION: 'pagination',
  FORM: 'form',
  INPUT: 'input',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  DATEPICKER: 'datepicker',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  UPLOAD: 'upload',
  AVATAR: 'avatar',
  BADGE: 'badge',
  CARD: 'card',
  CAROUSEL: 'carousel',
  IMAGE: 'image',
  LIST: 'list',
  TABLE: 'table',
  TOOLTIP: 'tooltip',
  TABS: 'tabs',
  ACCORDION: 'accordion',
  ALERT: 'alert',
  MESSAGE: 'message',
  DRAWER: 'drawer',
  MODAL: 'modal',
  LOADING: 'loading'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routePaths.HOME,
      name: routeNames.HOME,
      component: HomeView
    },
    {
      path: routePaths.BUTTON,
      name: routeNames.BUTTON,
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: routePaths.ICON,
      name: routeNames.ICON,
      component: () => import('../views/IconView.vue')
    },
    {
      path: routePaths.TYPOGRAPHY,
      name: routeNames.TYPOGRAPHY,
      component: () => import('../views/TypographyView.vue')
    },
    {
      path: routePaths.DIVIDER,
      name: routeNames.DIVIDER,
      component: () => import('../views/DividerView.vue')
    },
    {
      path: routePaths.FLEX,
      name: routeNames.FLEX,
      component: () => import('../views/FlexView.vue')
    },
    {
      path: routePaths.GRID,
      name: routeNames.GRID,
      component: () => import('../views/GridView.vue')
    },
    {
      path: routePaths.SPACE,
      name: routeNames.SPACE,
      component: () => import('../views/SpaceView.vue')
    },
    {
      path: routePaths.BREADCRUMB,
      name: routeNames.BREADCRUMB,
      component: () => import('../views/BreadcrumbView.vue')
    },
    {
      path: routePaths.DROPDOWN,
      name: routeNames.DROPDOWN,
      component: () => import('../views/DropdownView.vue')
    },
    {
      path: routePaths.TABS,
      name: routeNames.TABS,
      component: () => import('../views/TabsView.vue')
    },
    {
      path: routePaths.TABLE,
      name: routeNames.TABLE,
      component: () => import('../views/TableView.vue')
    },
    {
      path: routePaths.PAGINATION,
      name: routeNames.PAGINATION,
      component: () => import('../views/PaginationView.vue')
    },
    {
      path: routePaths.AVATAR,
      name: routeNames.AVATAR,
      component: () => import('../views/AvatarView.vue')
    },
    {
      path: routePaths.BADGE,
      name: routeNames.BADGE,
      component: () => import('../views/BadgeView.vue')
    },
    {
      path: routePaths.CARD,
      name: routeNames.CARD,
      component: () => import('../views/CardView.vue')
    },
    {
      path: routePaths.CAROUSEL,
      name: routeNames.CAROUSEL,
      component: () => import('../views/CarouselView.vue')
    },
    {
      path: routePaths.IMAGE,
      name: routeNames.IMAGE,
      component: () => import('../views/ImageView.vue')
    },
    {
      path: routePaths.LIST,
      name: routeNames.LIST,
      component: () => import('../views/ListView.vue')
    },
    {
      path: routePaths.TOOLTIP,
      name: routeNames.TOOLTIP,
      component: () => import('../views/TooltipView.vue')
    },
    {
      path: routePaths.ACCORDION,
      name: routeNames.ACCORDION,
      component: () => import('../views/AccordionView.vue')
    },
    {
      path: routePaths.ALERT,
      name: routeNames.ALERT,
      component: () => import('../views/AlertView.vue')
    },
    {
      path: routePaths.MESSAGE,
      name: routeNames.MESSAGE,
      component: () => import('../views/ToastMessageView.vue')
    },
    {
      path: routePaths.DRAWER,
      name: routeNames.DRAWER,
      component: () => import('../views/DrawerView.vue')
    },
    {
      path: routePaths.MODAL,
      name: routeNames.MODAL,
      component: () => import('../views/ModalView.vue')
    },
    {
      path: routePaths.LOADING,
      name: routeNames.LOADING,
      component: () => import('../views/LoadingView.vue')
    },
    {
      path: routePaths.FORM,
      name: routeNames.FORM,
      component: () => import('../views/FormView.vue')
    },
    {
      path: routePaths.INPUT,
      name: routeNames.INPUT,
      component: () => import('../views/InputView.vue')
    },
    {
      path: routePaths.SELECT,
      name: routeNames.SELECT,
      component: () => import('../views/SelectView.vue')
    },
  ]
})

export default router
