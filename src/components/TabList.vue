<!--
 * @Author: MrAlenZhong
 * @Date: 2021-07-01 15:47:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-07-09 09:48:24
 * @Description: 
-->
/**
 * Description: 导航中tablist的组件
 */
<template>
  <div class="nav-tab-list-wrap">
    <div class="nav-tab-item">
      <!-- {{menu}} -->
      <el-tag v-for="(item,index) in tabList" class="tag-page" :key="index" :type="item.type" closable>
        {{item.name}}
      </el-tag>
    </div>
  </div>
</template>

<script>
//例如：import '' from ''
import { mapGetters } from "vuex";
export default {
  name:"TabList",
  components: {},
  data() {
    return {
      tabList: [
        { name: '标签一'},
        { name: '标签二'},
        { name: '标签三'},
        { name: '标签四'},
        { name: '标签五'}
      ]
    };
  },
  computed: {
     ...mapGetters(["menu"])
  },
  watch: {},
  methods: {},
  created() {}, //生命周期 - 挂载之后
  mounted() {}, //生命周期 - 挂载之后
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
.nav-tab-list-wrap{
  width: 100%;
  height: 100%;
  .tag-page{
    height: 30px;
    float: left;
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
    &:hover{
     background: #3e98d4;
    }
  /deep/ i{
    color: #ffffff;
  }
   
  }

}

</style>



<!-- Author zhongmingyuan -->
<!-- Created by preference on 2021/07/08  星期四 -->