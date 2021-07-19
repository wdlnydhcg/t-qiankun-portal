/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-05 10:55:45
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-16 10:02:31
 * @Description: 
 */
import Mock from 'mockjs';
const baseUrl = '/mock'
Mock.mock(baseUrl+'/Api/GetAppConfigs', 'get', { //输出数据

  "message": "请求成功",
  "code": 200,
  "token":"dsfq21321ewq",
  "data": {
    "userName": "梁一鸣                 ",
    "mail": null,
    "encryptedUserPwd": null,
    "targetUrl": "http://localhost:8081/",
    "userToken": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IkNDNDk2ODMwNzVGQ0Y5Q0UxOTJFRTZBOTE5OEE1NDgyIiwidXNlciI6Ijc3MDUxNyJ9.fLb8K2GHGdwwrW0TkT1UalwtZnVxkI9AONgdxjo-P9aEA6ytqyZ7O9GMmt_iAkeDZVFExuJn5VhGjjBWpW-nkA",
    "userId": "770517",
    "city": "CAN",
    "sysCode": "flightcenter",
    "menuList": {},
    "extendMenuList": {
      "flightcenter": [
        {
          "sysCode": "flightcenter",
          "funType": "sys",
          "funUrl": null,
          "parentFunID": "402881e6523d8cd401523d9086790000",
          "funImg": "",
          "operateType": "",
          "funNameCn": "唐翼资源中心",
          "funUrls": [],
          "dunDesc": "",
          "funCode": "flightcenter",
          "funIndex": "46",
          "funId": "11e15428a799454d81a13467a5b316f7",
          "childrenFuns": [
            {
              "sysCode": "flightcenter",
              "funType": "menu",
              "funUrl": null,
              "parentFunID": "11e15428a799454d81a13467a5b316f7",
              "funImg": "",
              "operateType": "",
              "funNameCn": "资源管理",
              "funUrls": [],
              "dunDesc": "#icon_icon_dynamic_info1",
              "funCode": "resouce_mgr",
              "funIndex": "1",
              "funId": "00df035535b44077ac440e04b364faf1",
              "childrenFuns": [
                {
                  "sysCode": "flightcenter",
                  "funType": "menu",
                  "funUrl": null,
                  "parentFunID": "00df035535b44077ac440e04b364faf1",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "航班管理",
                  "funUrls": [],
                  "dunDesc": "",
                  "funCode": "flight_mgr",
                  "funIndex": "3",
                  "funId": "b59220a99ee743a789a9d4da73d5b9b4",
                  "childrenFuns": [
                    {
                      "sysCode": "flightcenter",
                      "funType": "menu",
                      "funUrl": null,
                      "parentFunID": "b59220a99ee743a789a9d4da73d5b9b4",
                      "funImg": "",
                      "operateType": "",
                      "funNameCn": "动态航班管理",
                      "funUrls": [],
                      "dunDesc": "",
                      "funCode": "dynamic_flight_mgr",
                      "funIndex": "1",
                      "funId": "16fbb450f5e945f29b5f613b0df9e00e",
                      "childrenFuns": [
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": "/flightcenter/dynamic_flight_mgr_search",
                          "parentFunID": "16fbb450f5e945f29b5f613b0df9e00e",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "动态航班查询",
                          "funUrls": [
                            {
                              "funUrl": "/flightcenter/dynamic_flight_mgr_search",
                              "funRemark": "dynamic_flight_mgr_add"
                            }
                          ],
                          "dunDesc": "",
                          "funCode": "dynamic_flight_mgr_search",
                          "funIndex": "1",
                          "funId": "bd4b460623394624902969fe1c2bc280",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": "/flightcenter/flightInfoManageControl",
                          "parentFunID": "16fbb450f5e945f29b5f613b0df9e00e",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "动态航班新增",
                          "funUrls": [
                            {
                              "funUrl": "/flightcenter/flightInfoManageControl",
                              "funRemark": "dynamic_flight_mgr_add"
                            }
                          ],
                          "dunDesc": "",
                          "funCode": "dynamic_flight_mgr_add",
                          "funIndex": "2",
                          "funId": "0a81c2a65b88480fac2f8c8ee1faf50f",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "16fbb450f5e945f29b5f613b0df9e00e",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "动态航班修改",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "dynamic_flight_mgr_edit",
                          "funIndex": "3",
                          "funId": "c64c6da2d82b46df802f40d4eacab119",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "16fbb450f5e945f29b5f613b0df9e00e",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "动态航班成组删除",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "dynamic_flight_mgr_remove",
                          "funIndex": "4",
                          "funId": "67839ac076644ae89118d0b6c58b592f",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "16fbb450f5e945f29b5f613b0df9e00e",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "动态航班变更通知",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "dynamic_flight_mgr_notify",
                          "funIndex": "5",
                          "funId": "e738b1210e4c495ba077f22fef5f76c6",
                          "childrenFuns": [
                            {
                              "sysCode": "flightcenter",
                              "funType": "menu",
                              "funUrl": "/resource/flight/web/flightChangeNoticeAPI/queryFlightChangeNoticePushByUserId",
                              "parentFunID": "e738b1210e4c495ba077f22fef5f76c6",
                              "funImg": "",
                              "operateType": "",
                              "funNameCn": "动态航班变更通知_插件数据接口",
                              "funUrls": [
                                {
                                  "funUrl": "/resource/flight/web/flightChangeNoticeAPI/queryFlightChangeNoticePushByUserId",
                                  "funRemark": ""
                                }
                              ],
                              "dunDesc": "",
                              "funCode": "dynamic_flight_mgr_notify_data",
                              "funIndex": "7",
                              "funId": "2e5de84dc74549668db59c59ef104242",
                              "childrenFuns": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "sysCode": "flightcenter",
                      "funType": "menu",
                      "funUrl": null,
                      "parentFunID": "b59220a99ee743a789a9d4da73d5b9b4",
                      "funImg": "",
                      "operateType": "",
                      "funNameCn": "静态航班管理",
                      "funUrls": [],
                      "dunDesc": "",
                      "funCode": "static_flight_mgr",
                      "funIndex": "2",
                      "funId": "d4861b162440478aa2cc860fbe61fa07",
                      "childrenFuns": [
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "d4861b162440478aa2cc860fbe61fa07",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "静态航班查询",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "static_flight_mgr_search",
                          "funIndex": "1",
                          "funId": "374f680183514553b722912cfa6e60f1",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "d4861b162440478aa2cc860fbe61fa07",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "静态航班新增",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "static_flight_mgr_add",
                          "funIndex": "2",
                          "funId": "00cfe3f525e14eb0a54e33654583d9fe",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "d4861b162440478aa2cc860fbe61fa07",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "静态航班导入",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "static_flight_mgr_import",
                          "funIndex": "3",
                          "funId": "22d930af692244de8dae1c6f31e446ad",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "d4861b162440478aa2cc860fbe61fa07",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "静态航班修改删除",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "static_flight_mgr_edit_and_del",
                          "funIndex": "4",
                          "funId": "8afb5b0aea15490a975108fd7320eb42",
                          "childrenFuns": []
                        },
                        {
                          "sysCode": "flightcenter",
                          "funType": "menu",
                          "funUrl": null,
                          "parentFunID": "d4861b162440478aa2cc860fbe61fa07",
                          "funImg": "",
                          "operateType": "",
                          "funNameCn": "静态航班生效",
                          "funUrls": [],
                          "dunDesc": "",
                          "funCode": "static_flight_mgr_effect",
                          "funIndex": "5",
                          "funId": "1d9d0ba322ed41d297c1c44556055868",
                          "childrenFuns": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "sysCode": "flightcenter",
                  "funType": "menu",
                  "funUrl": null,
                  "parentFunID": "00df035535b44077ac440e04b364faf1",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "承运人管理",
                  "funUrls": [],
                  "dunDesc": "",
                  "funCode": "carrier_mgr",
                  "funIndex": "4",
                  "funId": "5648f9921b2240e5a26fbd60e1e13b73",
                  "childrenFuns": []
                },
                {
                  "sysCode": "flightcenter",
                  "funType": "menu",
                  "funUrl": null,
                  "parentFunID": "00df035535b44077ac440e04b364faf1",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "机型管理",
                  "funUrls": [],
                  "dunDesc": "",
                  "funCode": "model_manage",
                  "funIndex": "5",
                  "funId": "79f1ae4f3f864cbd8b63c212eaf20371",
                  "childrenFuns": []
                },
                {
                  "sysCode": "flightcenter",
                  "funType": "menu",
                  "funUrl": null,
                  "parentFunID": "00df035535b44077ac440e04b364faf1",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "国家代码管理",
                  "funUrls": [],
                  "dunDesc": "",
                  "funCode": "country_code_mgr",
                  "funIndex": "6",
                  "funId": "34dfb5c77de541be944614fad1c78426",
                  "childrenFuns": []
                },
                {
                  "sysCode": "flightcenter",
                  "funType": "menu",
                  "funUrl": null,
                  "parentFunID": "00df035535b44077ac440e04b364faf1",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "城市代码管理",
                  "funUrls": [],
                  "dunDesc": "",
                  "funCode": "city_code_mgr",
                  "funIndex": "7",
                  "funId": "9825ab40ad19469ba06baa6270556d19",
                  "childrenFuns": []
                }
              ]
            }
          ]
        }
      ],
      "acto": [
        {
          "sysCode": "acto",
          "funType": "sys",
          "funUrl": null,
          "parentFunID": "402881e6523d8cd41d3r3486790111",
          "funImg": "",
          "operateType": "",
          "funNameCn": "货站处理",
          "funUrls": [],
          "dunDesc": "",
          "funCode": "acto",
          "funIndex": "46",
          "funId": "11e15428a799454d81a167a5b316f711",
          "childrenFuns": [
            {
              "sysCode": "acto",
              "funType": "sys",
              "funUrl": null,
              "parentFunID": "11e15428a799454d81a167a5b316f711",
              "funImg": "",
              "operateType": "",
              "funNameCn": "航班业务袋",
              "funUrls": [],
              "dunDesc": "",
              "funCode": "airBusBag",
              "funIndex": "463",
              "funId": "11e15428a799454ewqdaq23217a5b316f711",
              "childrenFuns": [
                {
                  "sysCode": "acto",
                  "funType": "sys",
                  "funUrl": "/acto/flightInfoManageControl",
                  "parentFunID": "11e15428a799454d81a167a5b316f711",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "航班业务袋信息管控",
                  "funUrls": [
                    {
                      "funUrl": "/acto/flightInfoManageControl",
                      "funRemark": "航班业务袋信息管控"
                    }
                  ],
                  "dunDesc": "",
                  "funCode": "flightInfoManageControl",
                  "funIndex": "461",
                  "funId": "3fghgfr3gedxfd23217a5b316f722",
                  "childrenFuns": []
                }, {
                  "sysCode": "acto",
                  "funType": "sys",
                  "funUrl": "/acto/home",
                  "parentFunID": "11e15428a799454d81a167a5b316f711",
                  "funImg": "",
                  "operateType": "",
                  "funNameCn": "主页",
                  "funUrls": [
                    {
                      "funUrl": "/acto/home",
                      "funRemark": "home"
                    }
                  ],
                  "dunDesc": "",
                  "funCode": "home",
                  "funIndex": "461",
                  "funId": "11e15428a799454ewqdaq23217a5b316f112",
                  "childrenFuns": []
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "data11": [
    {
      "module": "tang-cargo",
      "defaultApp": true,
      "entry": "//localhost:8080",
      "routerBase": "/tang-cargo",
      "data": [
        {
          "id": "13",
          "title": "货站处理系统",
          "icon": "el-icon-monitor",
          "children": [
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
      "defaultApp": true,
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