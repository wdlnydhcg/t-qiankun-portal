/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:48:52
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-12 17:30:59
 * @Description: 处理登陆身份鉴权
 */

  
import store from "../store";
import { Storage} from "wl-core"
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
import { DataType } from "wl-core"
import {  traverseDataToMenu } from "@/utils/utils.js";
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
    
    if (Object.keys(_res).includes("extendMenuList")){
      let flightcenterList = _res.extendMenuList.flightcenter||[];
      let actoList = _res.extendMenuList.acto || [];
      console.log("flightcenterList  ", flightcenterList);
      console.log("actoList  ", actoList);
      // _menu = _res.extendMenuList||[];
      flightcenterList = traverseDataToMenu(flightcenterList,{
        funId:"id",
        funNameCn: "title",
        funUrl: "url",
      })
      actoList = traverseDataToMenu(actoList, {
        funId: "id",
        funNameCn: "title",
        funUrl: "url",
      })
      _menu = [...flightcenterList, ...actoList]
      // _menu = (_menu.length > 0 && _menu[0].sysCode == "flightcenter") ? _menu[0].childrenFuns :[]
    }else{
      _res.forEach(i => {
        if (DataType.isArray(i.data)) _menu.push(...i.data)
      })
    }
    store.dispatch('menu/setMenu', _menu);
    let appConfig = [{
      defaultRegister: true,
      entry: "//localhost:8081",
      module: "resouce_mgr",
      routerBase: "/resouce_mgr",
      data:[

      ],
    },{
      defaultRegister: false,
      entry: "//localhost:8080",
      module: "cargo",
      routerBase: "/cargo",
      data: [
        {
          id: "1",
          title: "wl-ui",
          icon: "el-icon-monitor",
          children: [
            {
              id: "1-1",
              title: "home",
              url: "/cargo"
            },
            {
              id: "1-2",
              title: "about",
              url: "/cargo/flightInfoManageControl"
            }
          ]
        }
      ],
    }]
    // appConfig.map(obj=>{
    //   _menu.forEach((item)=>{
    //     if (obj.module == item.funCode){
    //       obj.data = [item]
    //       return false
    //     }
    //   })
    // })
    console.log("appConfig +++++ ", appConfig);
    console.log("_menu +++++ ", _menu);
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