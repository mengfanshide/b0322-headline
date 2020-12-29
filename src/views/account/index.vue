<template>
  <el-card>
    <!-- 面包屑 -->
    <bread-crumb slot="header">
      <template slot="title">账户信息</template>
    </bread-crumb>
    <el-upload :show-file-list="false" action :http-request="uploadAvatar">
      <img :src="oldAvatar" alt="" class="head-image" />
    </el-upload>
  </el-card>
</template>
<script>
import breadCrumb from "@/components/common/bread-crumb.vue";
import eventBus from "utils/eventBus.js";
export default {
  data() {
    return {
      userInfo: {},
      oldAvatar: ""
    };
  },
  methods: {
    uploadAvatar(params) {
      //   console.log(params);
      const data = new FormData();
      data.append("avatar", params.file);
      this.$axios({
        url: "/users/avatar",
        method: "post",
        data
      })
        .then((result) => {
          console.log(result);
          if (result.success) {
            this.oldAvatar = result.avatar;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  components: {
    breadCrumb
  },
  created() {
    this.userInfo = eventBus.$data.userInfo;
    this.oldAvatar = this.userInfo.avatar;
  }
};
</script>
<style lang="less" scoped>
.head-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
