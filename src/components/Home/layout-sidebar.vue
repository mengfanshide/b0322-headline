<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/images/logo_admin.png" alt="" />
    </div>
    <el-menu
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-order"> </i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">文章发布</el-menu-item>
        <el-menu-item index="/home/articles">内容管理</el-menu-item>
        <el-menu-item index="/home/comment">评论管理</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-s-home"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped></style>
