import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from "qiankun";
import store from "../store";
   
/**
 * @name 导入想传递给子应用的方法，其他类型的数据皆可按此方式传递
 * @description emit建议主要为提供子应用调用主应用方法的途径
 */
import emits from "../utils/emit"
/**
 * @name 导入qiankun应用间通信机制appStore
 */
import appStore from '../utils/app-store'

/**
 * @name 导入全局常量给子应用
 */
import GLOBAL from '../global'
/**
 * @name 声明子应用挂载dom，如果不需要做keep-alive，则只需要一个dom即可；
 */
// const appContainer = "#subapp-viewport";

/**
 * @name 声明要传递给子应用的信息
 * @param data 主应要传递给子应用的数据类信息
 * @param emits 主应要传递给子应用的方法类信息
 * @param GLOBAL 主应要传递给子应用的全局常量
 * @param utils 主应要传递给子应用的工具类信息（只是一种方案）
 * @param components 主应要传递给子应用的组件类信息（只是一种方案）
 */
let props = {
  data: store.getters,
  emits,
  GLOBAL
}

/**
 * @name 启用qiankun微前端应用
 * @param {Array} list 应用注册表信息
 */
const qianKunStart = (list) => {
  /**
   * @name 处理子应用注册表数据
   */
  let MICRO_CONF = []; // 子应用数组盒子
  let defaultApp = null; // 默认注册应用路由前缀
  console.log("qianKunStart *** list", list);
  list.forEach(item => {
    MICRO_CONF.push({
      ...item,
      name: item.module,
      entry: item.entry,
      container: "#subapp-"+item.mountId,
      activeRule: item.routerBase,
      props: { 
        ...props, 
        routes: item.data, 
        routerBase: item.routerBase
      }
    })
    if (item.defaultApp) defaultApp = item.routerBase;
  });
  // apps = [
  //   {
  //     activeRule: "/cargo",
  //     container: "#subapp-viewport",
  //     entry: "//localhost:8080",
  //     name: "cargo",
  //     props: {
  //       ...props,
  //       routes: [{
  //         children: [
  //           { id: "1-1", title: "home", url: "/cargo/home" }, 
  //           { id: "1-2", title: "about", url: "/cargo/flightInfoManageControl" }],
  //         icon: "el-icon-monitor",
  //         id: "1",
  //         title: "航班业务袋"
  //       }],
  //       routerBase: "/cargo",

  //     }
  //   },
  //   {
  //     activeRule: "/cargo",
  //     container: "#subapp-viewport2",
  //     entry: "//localhost:8080",
  //     name: "cargo2",
  //     props: {
  //       ...props,
  //       routes: [{
  //         children: [
  //           { id: "1-1", title: "home", url: "/cargo/home" },
  //           { id: "1-2", title: "about", url: "/cargo/flightInfoManageControl" }],
  //         icon: "el-icon-monitor",
  //         id: "1",
  //         title: "航班业务袋2"
  //       }],
  //       routerBase: "/cargo",

  //     }
  //   }
  // ]

  /**
  * @name 注册子应用
  * @param {Array} list subApps
  */
  console.log("apps  ****** ", MICRO_CONF);
  registerMicroApps(
    MICRO_CONF,
    {
      bootstrap:[
        app=>{
          console.log('[LifeCycle]  bootstrap %c%s', 'color: green;', app.name);
        }
      ],
      beforeLoad: [
        app => {
          console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
      ],
      beforeMount: [
        app => {
          console.log('[LifeCycle] before beforeMount %c%s', 'color: green;', app.name);
        },
      ],
      afterMount:[
        app=>{
          console.log('[LifeCycle] before afterMount %c%s', 'color: green;', app.name);
        }
      ],
      beforeUnmount:[
        app => {
          console.log('[LifeCycle] before beforeUnmount %c%s', 'color: green;', app.name);
        }
      ],
      afterUnmount: [
        app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
      ],
    },
  )

  /**
   * @name 设置默认进入的子应用
   * @param {String} 需要进入的子应用路由前缀
   */
  setDefaultMountApp(defaultApp + '/');

  /**
   * @name 启动微前端
   */
  start({
    // prefetch:"all",
    // singular:true,
    // sandbox:{
    //   experimentalStyleIsolation:true
    // }
  });

  /**
   * @name 微前端启动进入第一个子应用后回调函数
   */
  runAfterFirstMounted(() => { });

  /**
 * @name 启动qiankun应用间通信机制
 */
  appStore(initGlobalState);
}

export default qianKunStart;
