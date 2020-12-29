<template>
  <el-breadcrumb separator="/">
    <!-- 首页/个人信息 -->
    <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="title"></slot>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
