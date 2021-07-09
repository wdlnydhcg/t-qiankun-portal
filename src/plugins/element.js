/*
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-08 15:52:22
 * @Description: 
 */
import { DataType } from "wl-core"
import { Button, Menu, Submenu, Input, MenuItem, MenuItemGroup, Scrollbar, Loading, Message, MessageBox, Tabs, TabPane, Tag } from "element-ui";

/**
 * message方法 默认可关闭
 * @param {*} options 消息 | 配置项
 */
export function nhMessage (options) {
  DataType.isObject(options)
    ? Message({
      showClose: true,
      ...options
    })
    : Message({
      showClose: true,
      message: options
    })
}

/**
 * 确认框，默认确定取消按钮，警告状态
 * @param {*} message 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
export function nhConfirm (message, title = "提示", options = {}) {
  let _options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    ...options
  }
  return MessageBox.confirm(message, title, _options)
}

export default {
  components: [
    Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar, Input, Tabs, TabPane, Tag
  ],
  serve: [Loading],
  methods: [nhMessage, nhConfirm]
}

