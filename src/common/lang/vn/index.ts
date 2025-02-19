import common_vn from './common'
import home_vn from './home'
import menu_vn from './menu'
import table_vn from './table'

const vn = {
  common: common_vn,
  menu: menu_vn,
  home: home_vn,
  table: table_vn,
}

export type VN = typeof vn

export default vn
