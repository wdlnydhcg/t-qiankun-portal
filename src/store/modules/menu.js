/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-09 11:01:05
 * @Description: 
 */
export default {
  namespaced: true,
  state: {
    //左侧菜单栏
    is_collapse: false, // 折叠状态
    menu: [], // 菜单数据
    //顶部tab
    nav_list:[],  //当前选中的menu菜单
    nav_cur_id:"",
  },
  mutations: {
    // 推入用户菜单
    SET_MENU(state, data) {
      state.menu = data;
    },
    // 设置折叠状态
    SET_COLLAPSE_STATUS(state, data) {
      state.is_collapse = data;
    },
    // 设置打开的页面tab
    SET_NAV_LIST(state,data){
      state.nav_list = data;
    },
    //
    ADD_NAV_ITEM(state,data){
      console.log("ADD_NAV_ITEM  state  ",state);
      console.log("ADD_NAV_ITEM  data  ", data);
      state.nav_list.push(data);
    }
  },
  actions: {
    // 推入用户菜单
    setMenu({ commit }, data) {
      commit('SET_MENU', data)
    },
    // 设置折叠状态
    setCollapseStatus ({ commit }, data) {
      commit('SET_COLLAPSE_STATUS', data)
    },
    // 设置折叠状态
    setNavList ({ commit }, data) {
      commit('SET_NAV_LIST', data)
    },
    //点击左侧菜单，增加顶部tab
    addNavItem ({ commit }, data){
      commit('ADD_NAV_ITEM',data)

    }
  }
}