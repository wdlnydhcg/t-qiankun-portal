/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-06 09:33:44
 * @Description: 
 */
import http from "./__http__"
// let baseUrl = process.env.NODE_ENV != 'mock'? "":"/mock";
const getAppConfigsApi = () => http.get({
  url: '/Api/GetAppConfigs',
})

export {
  getAppConfigsApi, // 1获取菜单数据接口
}