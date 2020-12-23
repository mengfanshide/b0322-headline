<template>
  <el-container>
    <el-aside> </el-aside>
    <el-container>
      <el-header>
        <!-- Header content -->
      </el-header>
      <el-main>
        <!-- Main content -->
        红的里加就红的啊

        <el-button>啥也没有的按钮</el-button>
        <el-button type="primary">啥也没有的按钮</el-button>
        <el-button type="success">啥也没有的按钮</el-button>
        <el-button type="info">啥也没有的按钮</el-button>
        <el-button type="warning">啥也没有的按钮</el-button>
        <el-button type="danger">啥也没有的按钮</el-button>
        <el-form>
          <el-form-item label="这是用户名:" style="color: #fff" class="dddd">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      d: null
    };
  },
  created() {
    //发送ajax请求
    this.$axios
      .get("/home")
      .then((result) => {
        //axios 是异步的 promise处理
        console.log(result, "home-result");
        // this.d = result.data;
      })
      .catch((e) => {
        console.log(e, "ee");
        console.log(e.response);
        // console.log(data);
      });
  }
};
</script>
<style lang="less" scoped>
.el-aside {
  height: 100vh;
  background-color: #323745;
}
.el-header {
  height: 60px;
  background-color: #ff6700;
}
.el-main {
  height: 300px;
  background-color: red;
}
</style>
<style lang="less">
/* 在全局下 */
.dddd {
  label {
    color: #ffffff;
  }
}
</style>
