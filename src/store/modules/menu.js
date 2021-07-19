/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-15 15:57:43
 * @Description: 
 */
export default {
  namespaced: true,
  state: {
    //所有子应用的挂载点id
    mount_id_list:[],
    //左侧菜单栏
    is_collapse: false, // 折叠状态
    menu_list: [], // 菜单数据
    //顶部tab
    nav_list:[],  //当前选中的menu菜单
    nav_cur_id:"",
  },
  mutations: {
    //设置挂载点的队列
    SET_MOUNT_ID_LIST(state,data){
      state.mount_id_list = data;
    },
    // 推入用户菜单
    SET_MENU(state, data) {
      state.menu_list = data;
    },
    // 设置折叠状态
    SET_COLLAPSE_STATUS(state, data) {
      state.is_collapse = data;
    },
    // 设置nav_listtab
    SET_NAV_LIST(state,data){
      state.nav_list = data;
    },
    //添加tab
    ADD_NAV_ITEM(state,data){
      state.nav_cur_id = data.id;
      if (state.nav_list.filter((item) => {
        return item.id === data.id
      }).length === 0){
        state.nav_list.push(data);
      }
    },
    SET_NAV_CUR_ID(state,data){
      state.nav_cur_id = data;
    },
    // REMOVE_NAV_ITEM(state,data){
    //   state = dta
    // }
  },
  actions: {
    //SET_MOUNT_ID_LIST
    setMountIdList({commit},data){
      commit('SET_MOUNT_ID_LIST', data)
    },
    // 推入用户菜单
    setMenu({ commit }, data) {
      commit('SET_MENU', data)
    },
    // 设置折叠状态
    setCollapseStatus ({ commit }, data) {
      commit('SET_COLLAPSE_STATUS', data)
    },
  

    //设置tab的数组
    setNavList ({ commit }, data) {
      commit('SET_NAV_LIST', data)
    },
    // removeNavItem({commit},data){
    //   commit('REMOVE_NAV_ITEM', data)
    // },
    //点击左侧菜单，增加顶部tab
    addNavItem ({ commit }, data){
      commit('ADD_NAV_ITEM',data)
    },
    //切换tab
    setNavCurId({ commit},data){
      commit('SET_NAV_CUR_ID', data)
    }
  }
}