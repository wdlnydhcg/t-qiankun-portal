/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-19 11:06:38
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

// let list = [
//   {
//     'title': "资源管理",
//     'dunDesc': "#icon_icon_dynamic_info1",
//     'funCode': "resouce_mgr",
//     'funImg': "",
//     'funIndex': "1",
//     'funType': "menu",
//     'funUrls': [],
//     'id': "00df035535b440232164faf1",
//     'operateType': "",
//     'parentFunID': "11e15428a799454d81a13467a5b316f7",
//     'sysCode': "flightcenter",
//     'url': null,
//     'childrenFuns': [
//       {
//         'title': "子 1-1",
//         'dunDesc': "#icon_icon_dynamic_info1",
//         'funCode': "resouce_mgr",
//         'funImg': "",
//         'funIndex': "1",
//         'funType': "menu",
//         'funUrls': [],
//         'id': "00df035535b44077ac440e04b364faf1",
//         'operateType': "",
//         'parentFunID': "11e15428a799454d81a13467a5b316f7",
//         'sysCode': "flightcenter",
//         'url': null,
//         'childrenFuns': [
//           {
//             'title': "子 1-1-1",
//             'dunDesc': "#icon_icon_dynamic_info1",
//             'funCode': "resouce_mgr",
//             'funImg': "",
//             'funIndex': "1",
//             'funType': "menu",
//             'funUrls': [
//               {
//                 "funUrl": "/cargo/flightInfoManageControl",
//                 "funRemark": "子a 1-1"
//               }
//             ],
//             'id': "00df035535b44077ac440e04b364faf1",
//             'operateType': "",
//             'parentFunID': "11e15428a799454d81a13467a5b316f7",
//             'sysCode': "flightcenter",
//             'url': "/cargo/flightInfoManageControl",
//             'childrenFuns': [],
//           },
//           {
//             'title': "子 1-1-1",
//             'dunDesc': "#icon_icon_dynamic_info1",
//             'funCode': "resouce_mgr",
//             'funImg': "",
//             'funIndex': "1",
//             'funType': "menu",
//             'funUrls': [
//               {
//                 "funUrl": "/cargo/flightInfoManageControl",
//                 "funRemark": "子a 1-1"
//               }
//             ],
//             'id': "00df035535b44077ac440e04b364faf1",
//             'operateType': "",
//             'parentFunID': "11e15428a799454d81a13467a5b316f7",
//             'sysCode': "flightcenter",
//             'url': "/cargo/flightInfoManageControl",
//             'childrenFuns': [],
//           }
//         ],
//       }
//     ],
//   },
//   {
//     'title': "业务贷",
//     'dunDesc': "#icon_icon_dynamic_info1",
//     'funCode': "resouce_mgr",
//     'funImg': "",
//     'funIndex': "1",
//     'funType': "menu",
//     'funUrls': [],
//     'id': "00df035535b4407432543364faf1",
//     'operateType': "",
//     'parentFunID': "11e15428a799454d81a13467a5b316f7",
//     'sysCode': "acto",
//     'url': null,
//     'childrenFuns': [
//       {
//         'title': "子a 1-1",
//         'dunDesc': "#icon_icon_dynamic_info1",
//         'funCode': "resouce_mgr",
//         'funImg': "",
//         'funIndex': "1",
//         'funType': "menu",
//         'funUrls': [

//         ],
//         'id': "00df0355366546544faf1",
//         'operateType': "",
//         'parentFunID': "11e15428a799454d81a13467a5b316f7",
//         'sysCode': "acto",
//         'url': "/cargo/flightInfoManageControl",
//         'childrenFuns': [
//           {
//             'title': "子a 1-1-1",
//             'dunDesc': "#icon_icon_dynamic_info1",
//             'funCode': "resouce_mgr",
//             'funImg': "",
//             'funIndex': "1",
//             'funType': "menu",
//             'funUrls': [
//               {
//                 "funUrl": "/cargo/flightInfoManageControl",
//                 "funRemark": "子a 1-1"
//               }
//             ],
//             'id': "00df03553jhg3465404b364faf1",
//             'operateType': "",
//             'parentFunID': "11e15428a799454d81a13467a5b316f7",
//             'sysCode': "acto",
//             'url': "/cargo/flightInfoManageControl",
//             'childrenFuns': [],
//           },
//           {
//             'title': "子a 1-1-1",
//             'dunDesc': "#icon_icon_dynamic_info1",
//             'funCode': "resouce_mgr",
//             'funImg': "",
//             'funIndex': "1",
//             'funType': "menu",
//             'funUrls': [
//               {
//                 "funUrl": "/cargo/flightInfoManageControl",
//                 "funRemark": "子a 1-1"
//               }
//             ],
//             'id': "543ggt077ac440e04b364faf1",
//             'operateType': "",
//             'parentFunID': "11e15428a799454d81a13467a5b316f7",
//             'sysCode': "acto",
//             'url': "/cargo/flightInfoManageControl",
//             'childrenFuns': [],
//           }
//         ],
//       }
//     ],
//   },
// ]
// let serveConfig = {
//   "flightcenter": {
//     defaultApp: true,
//     entry: "//localhost:8081",    //模块所属服务地址
//     module: "flightcenter",        //各模块 不能重复
//     routerBase: "/flightcenter",   //各模块 可重复
//     data: [                       //只需配置本模块的地址
//       /**
//        * 注册模块的地址
//       {
//         id: "1",
//         title: "航班业务袋",
//         url:"/flightcenter/flightInfoManageControl"
//       }
//        */
//     ]
//   },
//   "acto": {
//     defaultApp: true,
//     entry: "//localhost:8080",    //模块所属服务地址
//     module: "acto",               //各模块 不能重复
//     routerBase: "/acto",          //各模块 可重复
//     data: []                      //只需配置本模块的地址

//   }

// }

//将左侧的菜单各级模块转化为子应用单独注册
function traverseDataToAppConfig (list = [], config = {}, node = "childrenFuns") {
  
  var newList = []
  list.map((item) => {
    if (item[node].length === 0) {
      let obj = {
        ...config[item.sysCode],
        module: item.title,
        mountId: item.id,
        data: [{
          id: item.id,
          title: item.title,
          url: item.url
        }]
      }
      newList.push(obj)
    } else if (item[node].length > 0) {
      newList = newList.concat(traverseDataToAppConfig(item[node], config))
    }
  })
  return newList
}



export {
  routerGo, // 跨应用路由跳转
  traverseDataToMenu, // 解析各子应用路由菜单
  traverseDataToAppConfig //解析菜单为qiankun注册的配置
}
