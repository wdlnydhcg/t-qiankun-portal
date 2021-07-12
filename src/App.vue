<!--
 * @Author: MrAlenZhong
 * @Date: 2021-06-25 16:18:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-12 10:00:18
 * @Description: 
-->
<template>
  <div id="root" class="main-container">
    <!-- 登陆后视图 -->

    <template v-if="hasToken">
      <!-- 左侧菜单区 -->
       <the-nav />
      <!-- 右侧视图 -->
      <div class="main-container-content">
        <!-- 上部导航区 -->
      <the-menu class="main-menu-box" />

        <!-- 子应用渲染区 -->
        <div class="main-container-view" :class="{'isCollapse_view':!isCollapse}">
          <el-scrollbar class="nh-scroll">
            <!-- qiankun2.0  container 模式-->
            <div id="subapp-viewport" class="app-view-box"></div>
            <div id="subapp-viewport2" class="app-view-box"></div>
          </el-scrollbar>
        </div>
      </div>
      
    </template>
    <!-- 非登录视图 -->
    <div v-else id="subapp-viewport" class="app-view-box"></div>
  </div>
</template>

<script>
import TheMenu from "@/components/TheMenu.vue";
import TheNav from "@/components/TheNav.vue";


export default {
  name: "rootView",
  components: {
    TheMenu,
    TheNav,
    
  },
  data(){
    return {
    }
  },
  computed: {
    hasToken() {
      return !!this.$store.getters.token;
    },
    isCollapse() {
      return this.$store.getters.is_collapse;
    },
    navList() {
      return this.$store.getters.nav_list;
    },
  },
  mounted(){
    // console.log('this.$store.getters.menu_list',this.$store.getters.menu_list);
    // this.$store.dispatch("menu/setMenu",[])
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main-container-content {
  flex: 1;
  display: flex;
  flex-flow: row;
  overflow: hidden;
  .menubar{
    display: inline-flex;
  }
  > .main-container-view {
    padding: 8px;
    width: calc(100% - 65px);
    height: calc(100%);
    background: $main-base-color;
    box-sizing: border-box;
    &.isCollapse_view{
      width: calc(100% - 250px);
    }
    > .nh-scroll {
      width: 100%;
      height: 100%;
      // background: #fff;
      border-radius: 4px;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        width: 100%;
      }
    }

    .app-view-box {
      width: 100%;
      // padding: 12px;
      box-sizing: border-box;
    }
  }
}
.subapp-loading {
  background: url("~@/assets/images/loading.gif");
}
</style>
