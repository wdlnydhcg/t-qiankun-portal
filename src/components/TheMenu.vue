<!--
 * @Author: MrAlenZhong
 * @Date: 2021-07-02 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-15 08:59:34
 * @Description: 
-->

<template>
  <div>
    <!-- ***** {{menu_list}}****** -->
  <!-- <el-menu
    class="the-menu is_collapse_menu"
    :collapse="is_collapse"
    :text-color="themeMenu.text"
    :default-openeds="menuDefaultOpeneds"
    :background-color="themeMenu.background"
    :active-text-color="themeMenu.active_text"
  >
   <el-scrollbar class="menu-scrollbar">
    <el-submenu v-for="sub of menu_list" :key="sub.id" :index="sub.id" >
      <template slot="title">
        <i class="menu-icon" :class="sub.icon"></i>
        <span class="menu-sub-title" v-show="!is_collapse">{{sub.title}}</span>
      </template>
      <el-menu-item
        v-for="item of sub.children"
        :key="item.id"
        :index="item.id"
        @click="goto(sub, item)"
      >
        <span class="menu-item-title">{{item.title}}</span>
      </el-menu-item>
    </el-submenu>
   </el-scrollbar>
  </el-menu> -->



   <!-- ***{{menu_list}}*** -->
   <!-- {{nav_list}} -->
       <!-- {{nav_cur_id}} -->
     <el-menu
      class="the-menu is_collapse_menu"
      :collapse="is_collapse"
      :text-color="themeMenu.text"
      :default-active="defaultActive"

      :background-color="themeMenu.background"
      :active-text-color="themeMenu.active_text"
    >
      <div v-for="(menuItem, index) in menu_list" :key="index">
        <template v-if="menuItem['childrenFuns'].length>0">
          <!-- <el-submenu class="class_0" :index="index.toString()"> -->
            <el-submenu class="class_0" :index="menuItem.id">
            <template #title>
              <svg class="nhicon" aria-hidden="true" style="padding-right: 3px">
                <use :xlink:href="menuItem.icon"></use>
              </svg>
              <span v-show="!is_collapse">{{ menuItem.title }}</span>
            </template>
            <div
              v-for="(childItem, childIndex) in menuItem['childrenFuns']"
              :key="childIndex"
            >
              <template v-if="childItem['childrenFuns'].length > 0">
                <!-- <el-submenu
                  :class="`${index}-${childIndex} xxx`"
                  :index="`${index}-${childIndex}`"
                > -->
                <el-submenu
                  :class="`${index}-${childIndex} xxx`"
                  :index="childItem.id"
                >
                  <template v-slot:title>
                    <svg class="nhicon" aria-hidden="true">
                      <use :xlink:href="childItem.icon"></use>
                    </svg>
                    {{ childItem.title }}
                  </template>
                  <div
                    v-for="(subChildItem, subChildIndex) in childItem[
                      'childrenFuns'
                    ]"
                    :key="subChildIndex"
                  >
                    <template v-if="subChildItem['childrenFuns'].length>0">
                      <!-- <el-submenu
                        :class="`${index}-${childIndex}-${subChildIndex}   `"
                        :index="`${index}-${childIndex}-${subChildIndex}`"
                      > -->
                      <el-submenu
                        :class="`${index}-${childIndex}-${subChildIndex}   `"
                        :index="subChildItem.id"
                      >
                        <template v-slot:title>
                          <svg class="nhicon" aria-hidden="true">
                            <use :xlink:href="subChildItem.icon"></use>
                          </svg>
                          {{ subChildItem.title }}
                        </template>
                        <div
                          v-for="(
                            grandChildItem, grandChildIndex
                          ) in subChildItem['childrenFuns']"
                          :key="grandChildIndex"
                        >
                          <!-- <el-menu-item
                            :class="`${index}-${childIndex}-${subChildIndex}-${grandChildIndex}`"
                            :index="`${index}-${childIndex}-${subChildIndex}-${grandChildIndex}`"
                            @click="
                              openTagPage(
                                grandChildItem,
                                `${index}-${childIndex}-${subChildIndex}-${grandChildIndex}`
                              )
                            "
                          > -->
                          <el-menu-item
                            :class="`${index}-${childIndex}-${subChildIndex}-${grandChildIndex}`"
                           :index="grandChildItem.id"
                            @click="
                              openTagPage(
                                grandChildItem,
                                `${index}-${childIndex}-${subChildIndex}-${grandChildIndex}`
                              )
                            "
                          > 
                            <svg class="nhicon" aria-hidden="true">
                              <use :xlink:href="grandChildItem.icon"></use>
                            </svg>
                            {{ grandChildItem.title }}
                          </el-menu-item>
                        </div>
                      </el-submenu>
                    </template>
                    <template v-else>
                      <!-- <el-menu-item
                        :class="`${index}-${childIndex}-${subChildIndex}`"
                        :index="`${index}-${childIndex}-${subChildIndex}`"
                        @click="
                          openTagPage(
                            subChildItem,
                            `${index}-${childIndex}-${subChildIndex}`
                          )
                        "
                      > -->
                       <el-menu-item
                        :class="`${index}-${childIndex}-${subChildIndex}`"
                        :index="subChildItem.id"
                        @click="
                          openTagPage(
                            subChildItem,
                            `${index}-${childIndex}-${subChildIndex}`
                          )
                        "
                      >
                        <svg class="nhicon" aria-hidden="true">
                          <use :xlink:href="subChildItem.icon"></use>
                        </svg>
                        {{ subChildItem.title }}
                      </el-menu-item>
                    </template>
                  </div>
                </el-submenu>
              </template>
              <template v-else>
                <!-- <el-menu-item
                  :index="`${index}-${childIndex}`"
                  @click="openTagPage(childItem, `${index}-${childIndex}`)"
                > -->
                <el-menu-item
                  :index="childItem.id"
                  @click="openTagPage(childItem, `${index}-${childIndex}`)"
                >
                  <svg class="nhicon" aria-hidden="true">
                    <use :xlink:href="childItem.icon"></use>
                  </svg>
                  {{ childItem.title }}
                </el-menu-item>
              </template>
            </div>
          </el-submenu>
        </template>
        <template v-else>
          <!-- <el-menu-item
            :index="index.toString()"
            @click="openTagPage(menuItem, index.toString())"
          > -->
          <el-menu-item
            :index="menuItem.id"
            @click="openTagPage(menuItem, index.toString())"
          >
            <svg class="nhicon" aria-hidden="true" style="padding-left: 3px">
              <use :xlink:href="menuItem.icon"></use>
            </svg>
            <template  #title>
              <span v-show="!is_collapse">
                {{ menuItem.title }}
              </span>
            </template>
          </el-menu-item>
        </template> 
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; // 引入状态共享
// import {menu} from "@/store/index.js"
// import { routerGo } from "@/utils/utils.js"; // 引入跨应用路由跳转
import router from  "@/router/index.js"
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
  mounted(){
    console.log("this.menu_list",this.menu_list);
    console.log("router  ",router);
  },
  computed: {
    defaultActive(){
      return this.nav_cur_id
    },
    // 左侧菜单主题
    themeMenu() {
      return this.theme_menu;
    },
    // 左侧菜单默认展开
    menuDefaultOpeneds() {
      return this.menu_list.map((i) => i.id);
    },
    // 导入vuex菜单数据，菜单折叠状态
    ...mapGetters(["menu_list", "is_collapse", "nav_list",'nav_cur_id'])
  },
  methods: {
    // 跨应用路由跳转
    openTagPage(item, index) {
      console.log("***** item", item);
      console.log("***** index", index);
      // addNavItem
      this.$store.dispatch("menu/addNavItem", item);
      router.push({"path":item.url})
      // routerGo(curItem.url);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.the-menu:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.the-menu {
  height: 100%;
  div{
    svg{
      display: inline;
      width: 30px;
      height: 30px;
    }
  }
  .the-menu-logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
    // color: #fff;
  }
 
  .menu-icon {
    color: #3dabf2;
  }
  .menu-sub-title {
    margin-left: 6px;
    font-weight: 600;
  }
  .menu-scrollbar {
    height: 100%;
    > .el-scrollbar__wrap {
      overflow-y: scroll;
      overflow-x: auto;
    }
  }
   &.el-menu--collapse {
    transition: all 0.25s;
    .el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>
