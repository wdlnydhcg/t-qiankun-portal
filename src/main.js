/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-02 17:10:03
 * @Description: 
 */
/**
 * @name 统一注册外部插件、样式、服务等
 */
import './core/install'

/**
 * @name 微前端基座主应用vue实例化

 */
import './core/render'

/**
 * @name 验证登陆身份并启动微应用
 */
import microAppStart from './core/auth'
microAppStart()
