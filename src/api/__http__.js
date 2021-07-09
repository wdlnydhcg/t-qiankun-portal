/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-06 09:34:00
 * @Description: 
 */
import Http from "wl-http"
import { Storage } from "wl-core"; // 导入存储函数
import global from "@/global"
import { Message } from "element-ui";

let baseUrl = '';
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV != "mock"){
  baseUrl = "/"
}else{
  baseUrl = "/mock"
}
// 配置项
const options = { 
  axiosOptions: { baseURL: baseUrl },
  requestInterceptorSuccessCb: config => {
    let token = Storage.get("token");
    if (token) config.headers.Authorization = token;
    return config;
  },
  responseInterceptorSuccessCb: res => {
    if (
      res.data.code == global.code.err
    ) {
      Message({
        showClose: true,
        message: res?.data?.message || "操作失败",
        type: "error"
      });
    }
    return res;
  },
  responseInterceptorErrorCb: err => err,
}

// 实例化http
const http = new Http(options);

export default http;