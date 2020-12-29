<template>
  <el-row>
    <el-col :span="24"> 上次登陆时间: {{ userInfo.last_modified_time }} </el-col>
  </el-row>
</template>
<script>
import eventBus from "utils/eventBus.js";
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    this.userInfo = eventBus.$data.userInfo;
  }
};
</script>
