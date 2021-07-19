/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-16 11:24:02
 * @Description: 无需服务端获取的微应用
 */

const href = "http://" + location.hostname;

// 无需登录的应用
const noAuthApps = [
  {
    module: "subapp-login",
    defaultApp: true,
    entry: href + ':2753',
    routerBase: "/login",
    useExternals: true,
    data: [
      {
        id: "1",
        title: "login",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "home",
            url: "/login"
          }
        ]
      }
    ]
  }
]

// 需要登陆身份但是和模块菜单授权无关的子应用
const nextAuthApps = [

]

export { noAuthApps, nextAuthApps };