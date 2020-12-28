<template>
  <el-row type="flex" class="layout-header" justify="space-between">
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>哈尔滨布卡科技有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <img :src="'http://localhost:3333' + userInfo.avatar" alt="" class="head-img" />
      <img :src="defaultImg" alt="" class="head-img" />
    </el-col>
  </el-row>
</template>
<script>
import eventBus from "utils/eventBus.js";

export default {
  data() {
    return {
      userInfo: {},
      defaultImg: require("../../assets/images/avatar.jpg")
    };
  },
  methods: {},
  created() {
    console.log(eventBus.$data.userInfo);

    this.userInfo = eventBus.$data.userInfo;
  }
};
</script>
<style lang="less" scoped>
.layout-header {
  padding: 8px 0;
  height: 56px;
  color: #18c19f;
  .left {
    line-height: 38px;
    font-size: 22px;
    .icon {
      font-size: 22px;
      margin-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .head-img {
      border-radius: 50%;
      margin-right: 5px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
