<!--
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-09 11:23:44
 * @Description: 
-->
<template>

  <el-menu
    class="the-menu is_collapse_menu"
    :collapse="is_collapse"
    :text-color="themeMenu.text"
    :default-openeds="menuDefaultOpeneds"
    :background-color="themeMenu.background"
    :active-text-color="themeMenu.active_text"
  >
   <el-scrollbar class="menu-scrollbar">
    <el-submenu v-for="sub of menu" :key="sub.id" :index="sub.id" >
      <template slot="title">
        <i class="menu-icon" :class="sub.icon"></i>
        <span class="menu-sub-title" v-show="!is_collapse">{{sub.title}}</span>
      </template>
      <el-menu-item
        v-for="item of sub.children"
        :key="item.id"
        :index="item.id"
        @click="goto(sub.module, item.url)"
      >
        <span class="menu-item-title">{{item.title}}</span>
      </el-menu-item>
    </el-submenu>
   </el-scrollbar>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"; // 引入状态共享
// import {menu} from "@/store/index.js"  
import { routerGo } from "@/utils/utils.js"; // 引入跨应用路由跳转

export default {
  name: "theMenu",
  data() {
    return {
      theme_menu: {
        background: "#ffffff",
        text: "#000000",
        active_text: "#1785cd"
      } // 菜单主
    };
  },
  computed: {
    // 左侧菜单主题
    themeMenu() {
      return this.theme_menu;
    },
    // 左侧菜单默认展开
    menuDefaultOpeneds() {
      return this.menu.map(i => i.id);
    },
    // 导入vuex菜单数据，菜单折叠状态
    ...mapGetters(["menu", "is_collapse",'nav_list'])
  },
  methods: {
    // 跨应用路由跳转
    goto(title, href) {
      // addNavItem
      this.$store.dispatch('menu/addNavItem', {
        name: 'carrier_mgr_add',
        id: '0-2-0',
        title: '承运人新增'
      })
      
      routerGo(href, title);
      
    }
  }
};
</script>

<style lang="scss">
.the-menu:not(.el-menu--collapse) {

  min-width: 250px;
  min-height: 400px;
}
.the-menu{
 
  &.el-menu--collapse {
    transition: all .25s;
    .el-submenu__icon-arrow{
      display: none;
    }
  }
}
.the-menu {
  height: 100%;
  .the-menu-logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
    // color: #fff;
  }
  .menu-icon {
    color: #3DABF2;
  }
  .menu-sub-title {
    margin-left: 6px;
    font-weight: 600;
  }
  .menu-scrollbar{
    height: 100%;
    >.el-scrollbar__wrap{
      overflow-y: scroll;
      overflow-x: auto;
    }
  }
}
</style>
