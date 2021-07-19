/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:48:52
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-19 08:34:52
 * @Description: 处理登陆身份鉴权
 */


import store from "../store";
import { Storage } from "wl-core"
/**
* @name 导入获取本地身份token函数
*/
import { getStorageToken } from "@/utils/user-vali"
/**
 * @name 导入接口获取子应用注册表接口
 */
import { getAppConfigsApi } from "@/api/app-configs"
/**
 * @name 导入消息组件
 */
import { nhMessage } from '@/plugins/element';
/**
 * @name 导入qiankun注册微应用方法
 */
import qianKunStart from "./app-register"
/**
 * @name 导入无需服务端获取的微应用
 */
import { noAuthApps, nextAuthApps } from "./app-config"
// import { DataType } from "wl-core"
import { traverseDataToMenu, traverseDataToAppConfig } from "@/utils/utils.js";

/**
 * @name 请求获取服务端子应用注册表
 */
const getAppConfigs = () => {
  getAppConfigsApi().then(({ data }) => {
    // 验证请求错误
    if (data.code !== 200) {
      nhMessage({
        type: 'error',
        message: "请求错误"
      })
      return;
    }
    // 将token存入本地
    Storage.set("token", data.token);
    // window?.location?.reload?.();
    if (data.code !== 200) {
      nhMessage({
        type: 'error',
        message: "请求错误"
      })
      return;
    }
    // 验证数据有效性
    let _res = data.data || [];
    if (_res.length === 0) {
      nhMessage({
        type: 'error',
        message: "没有可以注册的子应用数据"
      })
      return;
    }
    // 处理菜单状态共享
    let _menu = [];

    let flightcenterList = [], actoList = [];
    if (_res.extendMenuList.flightcenter && _res.extendMenuList.flightcenter[0].childrenFuns) {
      flightcenterList = _res.extendMenuList.flightcenter[0].childrenFuns
    }
    if (_res.extendMenuList.acto && _res.extendMenuList.acto[0].childrenFuns) {
      actoList = _res.extendMenuList.acto[0].childrenFuns
    }

    // let actoList = _res.extendMenuList.acto || [];
    flightcenterList = traverseDataToMenu(flightcenterList, {
      funId: "id",
      funNameCn: "title",
      funUrl: "url",
    })
    actoList = traverseDataToMenu(actoList, {
      funId: "id",
      funNameCn: "title",
      funUrl: "url",
    })
    _menu = [...flightcenterList, ...actoList]
    _menu.push({
      childrenFuns: [],
      dunDesc: "",
      funCode: "vue3test",
      funImg: "",
      funIndex: "463",
      funType: "vue3test",
      funUrls: [{
        funRemark: "page1",
        url: "/vue3test/page1"
      }],
      id: "11e15428a799454ewqdaq13217a5b316f711",
      operateType: "",
      parentFunID: "11e15428a799454d81a167a5b316f711",
      sysCode: "vue3test",
      title: "page1",
      url: "/vue3test/page1",
    }, {
      childrenFuns: [],
      dunDesc: "",
      funCode: "vue3test",
      funImg: "",
      funIndex: "463",
      funType: "vue3test",
      funUrls: [{
        funRemark: "page2",
        url: "/vue3test/page2"
      }],
      id: "11e15428a799eq4ewqdaq13217a5b316f711",
      operateType: "",
      parentFunID: "11e15428a799454d81a167a5b316f711",
      sysCode: "vue3test",
      title: "page2",
      url: "/vue3test/page2",
    })
    
    let serveConfig = {
      "flightcenter": {
        defaultApp: false,
        entry: "//localhost:8088",    //模块所属服务地址
        module: "flightcenter",        //各模块 不能重复
        routerBase: "/flightcenter",   //各模块 可重复
        data: [                       //只需配置本模块的地址
          /**
           * 注册模块的地址
          {
            id: "1",
            title: "航班业务袋",
            url:"/flightcenter/flightInfoManageControl"
          }
           */
        ]
      },
      "acto": {
        defaultApp: true,
        entry: "//localhost:8081",    //模块所属服务地址
        module: "acto",               //各模块 不能重复
        routerBase: "/acto",          //各模块 可重复
        data: []                      //只需配置本模块的地址
      },
      "vue3test":{
        defaultApp: true,
        entry: "//localhost:8082",    //模块所属服务地址
        module: "vue3test",               //各模块 不能重复
        routerBase: "/vue3test",          //各模块 可重复
        data: []                      //只需配置本模块的地址
      },
      // "vue3test2": {
      //   defaultApp: true,
      //   entry: "//localhost:8080",    //模块所属服务地址
      //   module: "vue3test2",               //各模块 不能重复
      //   routerBase: "/vue3test2",          //各模块 可重复
      //   data: []                      //只需配置本模块的地址
      // }
    }
    let appConfig = traverseDataToAppConfig(_menu, serveConfig)
    // let appConfig = [{
    //   defaultApp: true,
    //   entry: "//localhost:8081",
    //   module: "flightcenter",
    //   routerBase: "/flightcenter",
    //   data: [
    //     {
    //       id: "1",
    //       title: "航班业务袋",
    //       icon: "el-icon-monitor",
    //       children: [
    //         {
    //           id: "1-1",
    //           title: "home",
    //           url: "/flightcenter"
    //         },
    //         {
    //           id: "1-2",
    //           title: "about",
    //           url: "/flightcenter/flightInfoManageControl"
    //         }
    //       ]
    //     }
    //   ],
    // }, {
    //   defaultApp: true,
    //   entry: "//localhost:8080",
    //   module: "cargo",
    //   routerBase: "/cargo",
    //   data: [
    //     {
    //       id: "1",
    //       title: "航班业务袋",
    //       icon: "el-icon-monitor",
    //       children: [
    //         {
    //           id: "1-1",
    //           title: "home",
    //           url: "/cargo/home"
    //         },
    //         {
    //           id: "1-2",
    //           title: "about",
    //           url: "/cargo/flightInfoManageControl"
    //         }
    //       ]
    //     }
    //   ],
    // }]

    // appConfig.map(obj=>{
    //   _menu.forEach((item)=>{
    //     if (obj.module == item.funCode){
    //       obj.data = [item]
    //       return false
    //     }
    //   })
    // })
    console.log("_menu +++++ ", _menu);
    console.log("appConfig +++++ ", appConfig);
    
    let mountIdList = appConfig.map(item=>{
      return item.mountId
    })
    store.dispatch('menu/setMenu', _menu);
    store.dispatch('menu/setMountIdList', mountIdList);
    console.log("mountIdList", mountIdList);
    /**
     * @name 启用qiankun微前端应用，已启动过用手动加载，未启动过正常注册
     */
    // let menu = [..._res]
    qianKunStart([...appConfig, ...nextAuthApps]);
  })
}

/**
 * @name 验证用户身份并注册微应用
 */
const microAppStart = () => {
  const token = getStorageToken();
  /**
   * @name 已登录状态获取服务端微应用注册表
   */
  if (token) {
    // 处理token状态共享
    store.dispatch('app/setToken', token);
    getAppConfigs();
    return;
  }
  /**
   * @name 默认加载未登录时无需服务端获取的微应用
   */
  qianKunStart(noAuthApps)
}

export default microAppStart