/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-15 15:59:19
 * @Description: 
 */
const getters = {
  mount_id_list: state => state.menu.mount_id_list,
  menu_list: state => state.menu.menu_list, //左边菜单
  is_collapse: state => state.menu.is_collapse, //侧边收缩控制
  nav_list: state => state.menu.nav_list,   //顶部tab的总
  nav_cur_id: state => state.menu.nav_cur_id,   //当前选中的tab
  size: state => state.app.size,
  token: state => state.app.token,
  msg: state => state.appstore.msg,
}

export default getters