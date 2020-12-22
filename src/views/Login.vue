<template>
	<div class="login">
		<el-card shadow="always" class="login-card">
			<div class="logo">
				<img src="../assets/images/logo_index.png" alt="" />
			</div>
			<el-form
				style="margin-top: 20px"
				:model="loginForm"
				:rules="loginRules"
				ref="loginForm"
			>
				<el-form-item prop="mobile">
					<el-input
						placeholder="请输入手机号"
						v-model="loginForm.mobile"
					></el-input>
				</el-form-item>
				<el-form-item prop="code">
					<el-row :gutter="10">
						<el-col :span="16">
							<el-input
								placeholder="请输入验证码"
								v-model="loginForm.code"
							>
							</el-input>
						</el-col>
						<el-col :span="8">
							<el-button
								style="width: 100%; padding: 12px 0"
								:disabled="sendFlag"
								@click="send"
								>{{ sendMsg }}</el-button
							>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item prop="check">
					<el-checkbox v-model="loginForm.check" ref="chk">
						我已阅读并同意用户协议和隐私条款
					</el-checkbox>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width:100%" @click="login"
						>登录</el-button
					>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
export default {
	data() {
        const validator = function(rule, value, callback){
            // console.log(rule, 'rule');
            // console.log(value, 'value');
            if(value){
                callback();
            }else{
                callback(new Error('你必须同意这些条款, 无条件引用刘佳峰'));
            }
        }

		return {
			sendMsg: "发送验证码",
			sendFlag: false,
			loginForm: {
				mobile: "",
				code: "",
				check: false,
			},
			//包含表单验证规则
			loginRules: {
				//代表prop mobile 会映射到 loginForm的mobile属性
				mobile: [
					{
						required: true,
						message: "手机号不能为空",
					},
					{
						//正则 \d代表0-9
						pattern: /^1[3456789]\d{9}$/,
						message: "手机号格式不正确",
					},
				],
				code: [
					{
						required: true,
						message: "验证码不能为空",
					},
					{
						pattern: /^\d{4}$/,
						message: "验证码必须是四位数字",
					},
                ],
                check: [
                    {
                        //验证函数
                        validator
                    }
                ]
			},
		};
	},
	methods: {
		send() {
			let num = 10;
			let timer = setInterval(() => {
				if (num < 0) {
					this.sendMsg = "重新发送";
					this.sendFlag = false;
					clearInterval(timer);
					return;
				}
				this.sendMsg = num + "秒后重新发送";
				this.sendFlag = true;
				num--;
			}, 1000);

			//发送请求
			//网关发送请求
			this.$axios({
				url: "http://localhost:3008/users/getCode",
				method: "post",
			})
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.log(error, "看不懂也加上啊");
				});
		},
		login() {
			//ref 在组件上绑定一个名字
			//可以在实例中通过$refs的属性查找到组件
			// console.log(this.$refs);
			this.$refs.loginForm.validate((isOk) => {
                // console.log(isOk, "表单验证");
                //isOk validate 的回调函数参数, true代表验证成功
				if (isOk) {
					this.$axios({
						url: "http://localhost:3008/users/login",
						method: "post",
						data: this.loginForm,
					}).then((result) => {
						console.log(result);
					});
				}
			});
			// console.log(this.loginForm);
		},
	},
};
</script>
<style lang="less">
.login {
	background-image: url(../assets/images/login_bg.jpg);
	height: 100vh;
	min-height: 400px;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	.login-card {
		width: 440px;
		.logo {
			text-align: center;
			img {
				height: 45px;
			}
		}
	}
}
</style>
