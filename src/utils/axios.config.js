//之后会写一些关于请求和响应的内容
import axios from "axios";
//设置基本地址 通用地址
//每次发送请求的时候都会给请求地址带上baseURL的值
const port = 3333;
axios.defaults.baseURL = "http://localhost:" + port;
//interceptors 拦截器
axios.interceptors.request.use(
	function(config) {
        // console.log(config);
        const token = window.localStorage.getItem('user-token');
        //通常token都会放在专有的头信息中 Authorization 自定义头信息 http 请求头
        config.headers.Authorization = `Bearer ${token}`;
        //必须return 
        //cors 跨域请求, 处理复杂请求, 会发送两次请求, 一次用来和服务器确认是否允许请求
        return config;
	},
	function() {}
);

export default axios;
