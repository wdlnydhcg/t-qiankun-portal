/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-09 11:12:01
 * @Description: 
 */
const getters = {
  menu: state => state.menu.menu, //左边菜单
  is_collapse: state => state.menu.is_collapse, //侧边收缩控制
  nav_list: state => state.menu.nav_list,   //顶部tab的总
  size: state => state.app.size,
  token: state => state.app.token,
  msg: state => state.appstore.msg,
}

export default getters