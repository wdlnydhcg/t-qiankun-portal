<template>
  <div class="the-nav">
    <div class="nav-platform-name">
      <img src="../assets/images/logo.png" alt="" srcset="" />
    </div>
    <!-- 菜单折叠按钮 -->
    <div class="nav-handle-collapse">
      <i
        class="nav-icon el-icon-s-fold"
        :class="isCollapse ? 'hide' : 'show'"
        @click="setMenuCollapseStatus()"
      ></i>
    </div>
    <!-- <div class="pager-tab-list">广播：{{subappMsg}}</div> -->
    <div class="pager-tab-list">
      <span style="position: absolute;left: 0;">
        {{subappMsg}}
      </span>
      <!-- <tab-list> -->
        <span>
          <!-- <TabList/> -->
          <tab-list/>
        </span>
    </div>
    <!-- 右侧操作区 -->
    <div class="nav-handle-box user-info">
      <!-- 消息按钮 -->
      <!-- <i class="nav-icon nav-handle-item el-icon-bell"></i> -->

      <!-- 全屏按钮 -->
      <i
        class="nav-icon nav-handle-item el-icon-full-screen"
        @click="handleFullScreen"
      ></i>
      <!-- 用户头像 -->
      <div class="user_img">
        <img src="../assets/images/user_icon.jpg" alt="" srcset="">
      </div>
      <!-- 用户名 -->
      <span class="nav-handle-item nav-user-name">{{ user_name }}</span>
      <!-- 退出登录按钮 -->
      <div class="user-logout">
        <i
          class="el-icon-switch-button"
          @click="logOut()"
        ></i>退出登录
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Storage } from "wl-core";
import TabList from "@/components/TabList.vue";
export default {
  name: "theNav",
  components: {TabList},
  data() {
    return {
      user_name: "梁一鸣", // 名称 // 用户信息
      full_screen: false, // 是否全屏
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '3',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '4',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '5',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '6',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '7',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '8',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '9',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '10',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '11',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '12',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '13',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.is_collapse;
    },
    ...mapGetters({ subappMsg: "msg" })
  },
  methods: {
    //添加标签
    addTab(targetName) {
      console.log("targetName",targetName);
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
       removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },

    // 设置左侧菜单折叠状态
    setMenuCollapseStatus() {
      this.$store.dispatch("menu/setCollapseStatus", !this.isCollapse);
    },
    // 全屏操作
    handleFullScreen() {
      let element = document.documentElement;
      if (this.full_screen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      this.full_screen = !this.full_screen;
    },
    // 暂未开通，敬请期待
    notYetOpened() {
      this.$message({});
    },
    // 退出登录
    logOut() {
      Storage.remove("token");
      location.reload();
    }
  }
};
</script>

<style lang="scss">
.the-nav {
  display: block;
  position: relative;
  z-index: 1;
  height: $header-height;
  line-height: $header-height;
  background: $header-background;
  color: $header-color;
  box-sizing: border-box;
  .nav-handle-collapse {
    display: inline;
    margin: 8px 10px 8px 0px;
    text-align: center;
    border-radius: 3px;
    float: left;
    color: #fff;
    font-weight: normal;
    font-size: 18px;
    cursor: pointer;
    padding: 3px;
    background: #3fa5ee;
    height: 18px;
    line-height: 18px;

    &:hover {
      background: #4597e4;
    }
    & .show {
      transform: rotate(180deg);
      transition: all 0.25s;
    }
    & .hide {
      transform: rotate(0deg);
      transition: all 0.25s;
    }
  }

  .nav-platform-name {
    display: inline;
    float: left;
    img {
      margin: 5px 10px 5px 40px;
    }
  }
  
  .nav-user-name {
    font-size: 14px;
    // font-weight: 600;
    cursor: pointer;
    max-width: 140px;
    margin-left: 8px;
    margin-right: 18px;
    overflow: hidden;
  }
  .user-info{

    .nav-icon{
      display: flex;
      padding: 5px;
      margin: 6px 5px;
      border-radius: 5px;
      cursor: pointer;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      font-size: 18px;
      &:hover {
        background: #4597e4;
      }

    }
    .user_img{
      // display: inline;
      display: flex;
      padding: 5px;
      margin: 5px 5px;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: 1px solid;
      overflow:hidden;
      // float: left;
    }
  }

  .nav-handle-item + .nav-handle-item {
    margin-left: 12px;
  }

  .pager-tab-list {
    display: inline-block;
    position: relative;
    font-weight: 600;
    font-size: 16px;
    width: calc(100% - 680px);
    height: 100%;
  }
  .nav-handle-box {
    display: flex;
    float: right;
    color: #fff;
    .user-logout{
      display: inline;
      width: 80px;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      margin: 8px 10px 0px 0;
      font-size: 12px;
      text-align: center;
      background-color: rgba(69, 151, 228, 0.3);
      cursor: pointer;
      float: right;
      &:hover{
        background-color: rgba(69, 151, 228, 0.8);
      }

    }
  }
}
</style>