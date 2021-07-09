/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-05 10:55:45
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-08 15:00:25
 * @Description: 
 */
import Mock from 'mockjs';
const baseUrl = '/mock'
Mock.mock(baseUrl+'/Api/GetAppConfigs', 'get', { //输出数据

  "message": "请求成功",
  "code": 200,
  "token":"dsfq21321ewq",
  "data": [
    {
      "module": "tang-cargo",
      "defaultRegister": true,
      "entry": "//localhost:8080",
      "routerBase": "/tang-cargo",
      "data": [
        {
          "id": "13",
          "title": "货站处理系统",
          "icon": "el-icon-monitor",
          "children": [
            {
              "id": "133",
              "title": "tang",
              "icon": "el-icon-monitor",
              "children": [
                {
                  "id": "133-1",
                  "title": "主页",
                  "url": "/tang-cargo/home"
                }
              ]
            },
            {
              "id": "13-2",
              "title": "航班业务袋信息管控",
              "url": "/tang-cargo/flightInfoManageControl"
            }
          ]
        }
      ]
    }, {
      "module": "subapp-tang-mgr",
      "defaultRegister": true,
      "entry": "//localhost:7000",
      "routerBase": "/tangmgr",
      "data": [
        {
          "id": "18",
          "title": "本地",
          "icon": "el-icon-monitor",
          "children": [
            {
              "id": "18-1",
              "title": "home",
              "url": "/tangmgr"
            },
            {
              "id": "18-2",
              "title": "about",
              "url": "/tangmgr/about"
            }
          ]
        }
      ]
    },
  ]

});