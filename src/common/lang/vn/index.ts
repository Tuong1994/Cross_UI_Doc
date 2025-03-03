import button_vn from './button'
import common_vn from './common'
import home_vn from './home'
import menu_vn from './menu'
import table_vn from './table'
import tabs_vn from './tabs'

const vn = {
  common: common_vn,
  menu: menu_vn,
  home: home_vn,
  table: table_vn,
  tabs: tabs_vn,
  button: button_vn
}

export type VN = typeof vn

export default vn
