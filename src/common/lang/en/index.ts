import button_en from './button'
import common_en from './common'
import divider_en from './divider'
import flex_en from './flex'
import form_en from './form'
import grid_en from './grid'
import home_en from './home'
import icon_en from './icon'
import menu_en from './menu'
import pagination_en from './pagination'
import space_en from './space'
import table_en from './table'
import tabs_en from './tabs'
import typography_en from './typography'

const en = {
  common: common_en,
  menu: menu_en,
  home: home_en,
  table: table_en,
  tabs: tabs_en,
  button: button_en,
  grid: grid_en,
  pagination: pagination_en,
  icon: icon_en,
  form: form_en,
  typography: typography_en,
  divider: divider_en,
  flex: flex_en,
  space: space_en,
}

export type EN = typeof en

export default en
