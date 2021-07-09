/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-07 10:20:27
 * @Description: 
 */
import Vue from "vue"
import router from '../router'
import store from '../store'
import App from '../App.vue'
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#main-container");