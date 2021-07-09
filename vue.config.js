/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:24:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-06 09:23:43
 * @Description: 
 */

const { port } = require("./package");

module.exports = {
  // publicPath: './',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: {
      // "/Bing": {
      //   target: "https://cn.bing.com/",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/Bing": ""
      //   }
      // },
      // "/mock":{
      //   target: "/",
      //   // changeOrigin: true,
      //   pathRewrite: {
      //     "^/mock": ""
      //   }
      // }
    // }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/variables/variables.scss";`
      }
    }
  }
};
