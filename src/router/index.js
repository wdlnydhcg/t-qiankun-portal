/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-13 10:00:50
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

]
// const originalPush = Router.prototype.originalPush;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this,location).catch(err=>err)
// }
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
