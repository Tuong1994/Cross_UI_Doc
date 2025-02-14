import common_vn from './common'
import home_vn from './home'
import menu_vn from './menu'

const vn = {
  common: common_vn,
  menu: menu_vn,
  home: home_vn
}

export type VN = typeof vn

export default vn
