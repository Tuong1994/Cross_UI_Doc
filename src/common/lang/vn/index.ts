import accordion_vn from './ui/accordion'
import alert_vn from './ui/alert'
import avatar_vn from './ui/avatar'
import badge_vn from './ui/badge'
import breadcrumb_vn from './ui/breadcrumb'
import button_vn from './ui/button'
import card_vn from './ui/card'
import carousel_vn from './ui/carousel'
import common_vn from './common'
import divider_vn from './ui/divider'
import drawer_vn from './ui/drawer'
import dropdown_vn from './ui/dropdown'
import flex_vn from './ui/flex'
import form_vn from './form'
import grid_vn from './ui/grid'
import home_vn from './home'
import icon_vn from './ui/icon'
import image_vn from './ui/image'
import list_vn from './ui/list'
import loading_vn from './ui/loading'
import menu_vn from './ui/menu'
import modal_vn from './ui/modal'
import pagination_vn from './ui/pagination'
import space_vn from './ui/space'
import table_vn from './ui/table'
import tabs_vn from './ui/tabs'
import toast_vn from './ui/toast'
import tooltip_vn from './ui/tooltip'
import typography_vn from './ui/typography'
import select_vn from './control/select'
import input_vn from './control/input'

const vn = {
  common: common_vn,
  menu: menu_vn,
  home: home_vn,
  table: table_vn,
  tabs: tabs_vn,
  button: button_vn,
  grid: grid_vn,
  pagination: pagination_vn,
  icon: icon_vn,
  typography: typography_vn,
  divider: divider_vn,
  flex: flex_vn,
  space: space_vn,
  breadcrumb: breadcrumb_vn,
  dropdown: dropdown_vn,
  avatar: avatar_vn,
  badge: badge_vn,
  card: card_vn,
  carousel: carousel_vn,
  image: image_vn,
  list: list_vn,
  tooltip: tooltip_vn,
  accordion: accordion_vn,
  alert: alert_vn,
  toast: toast_vn,
  drawer: drawer_vn,
  modal: modal_vn,
  loading: loading_vn,
  form: form_vn,
  input: input_vn,
  select: select_vn,
}

export type VN = typeof vn

export default vn
