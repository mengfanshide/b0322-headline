<template>
  <el-container>
    <el-aside width="200px" style="background-color: #323745">
      <!-- Aside content -->
      左侧导航
    </el-aside>
    <el-container>
      <el-header height="54px" style="background-color: #10182d">
        <!-- Header content -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <!-- Main content -->
        <!-- 显示区域 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from "@/components/Home/layout-header.vue";
export default {
  components: {
    "layout-header": Header
  }
};
</script>
<style lang="less">
.el-aside {
  height: 100vh;
  min-height: 600px;
}
</style>
