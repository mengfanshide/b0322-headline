<template>
  <el-card>
    <!-- 面包屑 -->
    <bread-crumb slot="header">
      <template slot="title">账户信息</template>
    </bread-crumb>
    <el-upload
      v-model="userInfo.avatar"
      :show-file-list="false"
      action
      :http-request="uploadAvatar"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :auto-upload="false"
      :on-change="getFile"
    >
      <img :src="oldAvatar" alt="" class="head-image" />
    </el-upload>
    <el-form :model="userInfo" ref="userForm">
      <el-form-item> </el-form-item>
      <el-form-item label="昵称:">
        <el-input v-model="userInfo.nickname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="saveUserInfo" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import breadCrumb from "@/components/common/bread-crumb.vue";
import eventBus from "utils/eventBus.js";
console.log(process.env);
export default {
  data() {
    return {
      userInfo: {},
      oldAvatar: "",
      file: null
    };
  },
  methods: {
    getFile(file, filelist) {
      console.log(file);
      console.log(filelist);
      this.oldAvatar = URL.createObjectURL(file.raw);
      this.file = file.raw;
    },
    saveUserInfo() {
      console.log(this.userInfo);

      //调用文件上传
      this.uploadAvatar(this.file);
    },

    beforeAvatarUpload(file) {
      console.log(file, "before");
      console.log(URL.createObjectURL(file), "file"); //blob 二进制
      this.oldAvatar = URL.createObjectURL(file);
    },
    handleAvatarSuccess(file) {
      console.log(file, "success");
    },
    uploadAvatar(params) {
      // console.log(params, "http");
      const data = new FormData();
      // data.append("avatar", params.file);
      data.append("avatar", params);
      // console.log(params.file);
      // // console.log(URL.createObjectURL(params.file));
      this.$axios({
        url: "/users/avatar",
        method: "post",
        data
      })
        .then((result) => {
          if (result.success) {
            // this.oldAvatar = result.avatar;
            console.log(result);
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
