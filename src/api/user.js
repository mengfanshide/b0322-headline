//用户api
//放关于用户操作的一些信息
import axios from '../utils/axios.config.js';

//只写请求方法
//请求接口

export function getUserInfo(token){
    return axios.get('/users/userInfo', {params: {token}}); //返回一个promise对象
}


