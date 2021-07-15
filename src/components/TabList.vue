<!--
 * @Author: MrAlenZhong
 * @Date: 2021-07-01 15:47:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-14 17:00:07
 * @Description: 导航中tablist的组件
-->

<template>
  <div class="nav-tab-list-wrap" ref="tabListWrap">
    <div class="tag-list--btn-wrap" v-show="isShowScroll">
      <div class="tag-list--prev" @click="scrollPrev">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="tag-list--next" @click="scrollNext">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
       <span class="xxx" style="position:absolute">{{editableTabsValue}}</span>
    <div class="nav-tab-item" ref="tabList">
      <!-- <el-tag v-for="(item,index) in nav_list" class="tag-page" :class="{'active':nav_cur_id == item.id}" :key="index" @click="clickPage(item)" closable>
        {{item.title}}
      </el-tag> -->
   
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        @edit="editPage"
        @tab-click="clickPage"
        @tab-remove="removePage"
      >
        <el-tab-pane
          :key="item.id"
          v-for="(item) in nav_list"
          :label="item.title"
          :name="item.id"
          closable
        >
          <!-- {{item.content}} -->
        </el-tab-pane>
      </el-tabs>
       <!-- {{editableTabsValue}}  -->
    </div>
  </div>
</template>

<script>
//例如：import '' from ''
import { mapGetters } from "vuex";
import { routerGo } from "@/utils/utils.js"; // 引入跨应用路由跳转
export default {
  name: "TabList",
  components: {},
  data() {
    return {
      editableTabsValue: "",
      isShowScroll: false,
      tagOffset: 0,
      tagWidth: 100,
      tagListWidth: 0,
      tagListScrollWidth: 0
    };
  },
  computed: {
    ...mapGetters(["nav_list", "nav_cur_id"])
  },
  watch: {
    nav_cur_id:{
      handler(val){
        this.editableTabsValue = val
        this.nav_list.forEach(item => {
          if(item.id === val){
            routerGo(item.url);
          }
        });
      },
      immediate:true
      
    },
    editableTabsValue(value){
      this.$store.dispatch("menu/setNavCurId", value);
    }
  },
  methods: {
    //计算按钮是否显示
    judgeIsShow() {
      if (this.$refs.tabList.clientWidth > this.$refs.tabListWrap.clientWidth) {
        this.isShowScroll = true;
      } else {
        this.isShowScroll = false;
      }
    },
    editPage(a,b,c){
      console.log("editPage a",a);
      console.log("editPage b",b);
      console.log("editPage c",c);
    },
    //切换tab
    clickPage(item) {
      let curPage = this.nav_list[Number(item.index)];
      // this.$store.dispatch("menu/setNavCurId", curPage.id);
      routerGo(curPage.url);
    },
    //移除tab
    removePage(id) {

      let newList = this.nav_list.filter(item=>{
        return item.id != id
      })
      this.$store.dispatch("menu/setNavList",newList)
      if(newList.length>0){
        this.$store.dispatch("menu/setNavCurId",newList[0].id)
      }
      
    },
    // 标签向左移动
    scrollPrev() {
      this.tagOffset.value += this.tagWidth;
      if (this.tagOffset.value >= 0) this.tagOffset.value = 0;
    },
    // 标签向右移动
    scrollNext() {
      this.tagOffset.value += -this.tagWidth;
      if (
        -this.tagOffset.value >=
        this.tagListScrollWidth.value - this.tagListWidth.value
      ) {
        this.tagOffset.value = -(
          this.tagListScrollWidth.value - this.tagListWidth.value
        );
      }
    }
  },
  created() {}, //生命周期 - 挂载之后
  mounted() {
    this.judgeIsShow();
    console.log(
      "this.$refs.tabList.clientWidth",
      this.$refs.tabList.clientWidth
    );
    console.log(
      "this.$refs.tabListWrap.clientWidth",
      this.$refs.tabListWrap.clientWidth
    );
  }, //生命周期 - 挂载之后
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav-tab-list-wrap {
  width: 100%;
  height: 100%;
  padding: 0 25px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  padding: 0 20px;
  .nav-tab-item {
    width: 100%;
    overflow: hidden;
    position: relative;
    float: left;
    white-space: nowrap;
    transition: transform 0.3s;
    .el-tabs {
      font-size: 14px;
      /deep/ .el-tabs__header {
        border: 0;
        margin: 0;
        .el-tabs__nav-wrap {
          .el-tabs__nav-prev,
          .el-tabs__nav-next {
            color: #ffffff;
            height: 30px;
            line-height: 30px;
            width: 20px;
            text-align: center;
            background: #ffffff4a;
            border-radius: 1px 8px 8px 1px;
            margin-top: 6px;
          }
          .el-tabs__nav-prev {
            border-radius: 8px 1px 1px 8px;
          }
        }
        .el-tabs__nav {
          border: 0;
          height: 41px;
          .el-tabs__item {
            margin: 11px 6px 0 6px;
            padding: 0 5px 0 10px;
            height: 30px;
            line-height: 30px;
            border-radius: 5px 5px 0 0;
            font-size: 12px;
            color: #ffffff;
            background-color: #1483cc;
            border-color: cadetblue;
            &:hover {
              padding: 0 10px 0 10px;
            }
            &.is-active {
              background-color: #ffffff;
              color: #3daaf2;
            }
          }
        }
      }
      //  /deep/
    }
  }
  .tag-list--btn-wrap {
    color: #ffffff;
    // cursor: pointer;
    height: 100%;
    width: 100%;
    position: absolute;
    .tag-list--prev {
      position: absolute;
      top: 10px;
      left: -18px;
      border-radius: 10px 0px 0px 10px;
      width: 15px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      z-index: 100;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .tag-list--next {
      position: absolute;
      top: 10px;
      right: 22px;
      border-radius: 0px 10px 10px 0px;
      width: 15px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      z-index: 100;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .tag-page {
    height: 30px;
    // float: left;
    margin: 10px 4px 0 4px;
    background: #1483cc;
    border-color: #3daaf2;
    color: #ffffff;
    font-size: 14px;
    border-bottom: 0;
    border-radius: 8px 8px 0 0;
    font-size: 12px;
    font-weight: normal;
    cursor: pointer;
    &:hover {
      background: #3e98d4;
    }
    &.active {
      background: #ffffff;
      color: #000000;
      /deep/ i {
        color: #3e98d4;
        background: #fff;
        &:hover {
          background: #ccc;
        }
      }
    }
    /deep/ i {
      color: #ffffff;
    }
  }
}
</style>



<!-- Author zhongmingyuan -->
<!-- Created by preference on 2021/07/08  星期四 -->