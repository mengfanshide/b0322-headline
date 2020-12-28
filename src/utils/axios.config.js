//之后会写一些关于请求和响应的内容
import axios from 'axios';
//引入element-ui弹窗组件
import { Message } from 'element-ui';
import router from '../router';
//设置基本地址 通用地址
//每次发送请求的时候都会给请求地址带上baseURL的值
const port = 3333;
axios.defaults.baseURL = 'http://localhost:' + port;
//interceptors 拦截器
axios.interceptors.request.use(
    function(config) {
        // console.log(config);

        const token = window.localStorage.getItem('user-token');
        //通常token都会放在专有的头信息中 Authorization 自定义头信息 http 请求头
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // else{
        //     config.headers.Authorization = `Bearer ${token}`;
        // }

        //必须return
        //cors 跨域请求, 处理复杂请求, 会发送两次请求, 一次用来和服务器确认是否允许请求
        return config;
    },
    function() {}
);
//拦截响应
//拦截响应需要给出明确的返回值, 成功不给返回值, 拿不到结果
axios.interceptors.response.use(
    function(response) {
        // console.log(response, 'axios-response');
        return response.data ? response.data : {};
    },
    function(error) {
        console.log(error, 'axios-error');
        //获取http状态码->有问题的状态码
        const status = error.response.status ? error.response.status : 401;
        let message = '';
        switch (status) {
            case 401:
                message = '未授权, 或授权已过期, 请登录';
                //把token干掉
                window.localStorage.removeItem('user-token');
                router.push('/login');
                break;
            default:
                message = error.response.data;
                break;
        }
        Message({
            type: 'warning',
            message: message + '-----自定义'
        });
        //空promise对象 错误到此为止
        return new Promise(() => {});
        // return error.response;
    }
);
export default axios;
