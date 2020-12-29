<template>
  <el-row type="flex" class="layout-header" justify="space-between">
    <el-col class="left" :span="6" :md="12" :sm="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>哈尔滨布卡科技有限公司</span>
    </el-col>
    <el-col :span="3" :md="6" :sm="6" class="right">
      <img
        :src="userInfo.avatar ? userInfo.avatar : defaultImg"
        alt=""
        class="head-img"
      />
      <el-dropdown trigger="click" @command="handlerMenuItem">
        <span class="el-dropdown-link">
          {{ userInfo.nickname }}
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
import eventBus from "utils/eventBus.js";
export default {
  data() {
    return {
      userInfo: {},
      defaultImg: require("../../assets/images/avatar.jpg") //默认峰峰酱的图片
    };
  },
  methods: {
    handlerMenuItem(command) {
      switch (command) {
        case "account":
          break;
        case "git":
          window.location = "https://github.com/mengfanshide";
          break;
        case "logout":
          //应该调用api
          window.localStorage.removeItem("user-token");
          this.$message({
            type: "info",
            message: "欢迎下次再来"
          });
          this.$router.push("/login");
          break;
      }
    }
  },
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
.el-dropdown-link {
  color: #ffffff;
}
</style>
