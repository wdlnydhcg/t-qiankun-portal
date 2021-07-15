/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-14 17:00:50
 * @Description: 公共工具类
 */

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
function routerGo(href = '/', title = null, stateObj = {}) {
  
  window.history.pushState(stateObj, title, href + '/');
}

/**
 * 解析成菜单
 * @param {Array} menuList menuList
 */

function traverseDataToMenu(list=[], setting={}) {
  var newList = list.map((obj) => {
    for (var key in obj) {
      var newKey = setting[key];
      if (newKey) {
        obj[newKey] = obj[key];
        delete obj[key];
      }

      if (obj[key] instanceof Array) {
        traverseDataToMenu(obj[key], setting);
      }
    }
    return obj;
  });
  return newList;
}
/**
 * 解析成应用配置
 * 
 */
// function traverseDataToAppConfig (list = [],setting = {}) {
//   // list.map((item)=>{
//   //   setting
//   // })
//   return
// }
export {
  routerGo, // 跨应用路由跳转
  traverseDataToMenu // 解析各子应用路由菜单
}
