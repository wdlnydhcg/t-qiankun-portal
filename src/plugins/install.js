/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-05 11:42:43
 * @Description: 
 */
import Vue from "vue";
import Element from "./element";
import "../mock/index.js";
import 'element-ui/lib/theme-chalk/index.css'

// 注册组件
[...Element.components].forEach(i => Vue.use(i))

// 注册指令服务
Element.serve.forEach(i => Vue.use(i.directive));

// 注册挂载方法
Element.methods.forEach(i => Vue.prototype[`$${i.name}`] = i);

