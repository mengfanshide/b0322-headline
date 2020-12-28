/* 进入路由之前, 进入路由之后 */
import router from './index'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import eventBus from '../utils/eventBus.js';
// import {getUserInfo} from '../api/user.js';
import {getUserInfo} from 'api/user.js';
import {Message} from 'element-ui'

// import getPageTitle from '../utils/getPageTitle.js'
//utils -> ../utils/的别名
import getPageTitle from 'utils/getPageTitle.js';
//进入所有路由之前
// authorization 验证token
// 1. 有token 
// 1.1 /login next() 放行
// 1.2 任意路由 峰峰酱信息
// 1.2.1 判断是否有峰峰酱的信息
// 1.2.1.1 有 放行
// 1.2.1.2 没有 请求用户信息 token过期 try catch 干掉 token 重定向到login
// 2. 没有token
// 2.1 /login 来的 放行
// 2.2 重定向到login
const whiteList = ['/login'] //白名单, 存储没有token也能访问的页面
router.beforeEach(async (to, from, next)=>{
    console.log(to.path);
    console.log(to.meta);
    document.title = getPageTitle(to.meta.title);
    // console.log(from);
    NProgress.start(); //开启进度条
    // next();
    const token = window.localStorage.getItem('user-token');
    if(token){
        if(to.path === '/login'){
            next({path: '/home'});
            NProgress.done();
        }else{
            //获取峰峰酱的个人信息
            const hasGetUserInfo = eventBus.$data.userInfo;
            if(hasGetUserInfo){
                next();
            }else{
                //去后台要个人信息
                try{
                    // 获取个人信息的方法
                    // 正常来说所有的请求应该独立出来当做api处理
                    // 可以写几个对token操作的公有方法
                    const token = window.localStorage.getItem('user-token');
                    const result = await getUserInfo(token);
                    eventBus.$data.userInfo = result.data[0];
                    eventBus.$data.userInfo.last_modified_time =  new Date(eventBus.$data.userInfo.last_modified_time).toLocaleString()
                    console.log(eventBus.$data.userInfo);

                    next();
                }catch(error){
                    window.localStorage.removeItem('user-token');
                    Message({
                        type: 'error',
                        message: error || '这里有情况'
                    });
                    next(`/login?redirect=${to.path}`);
                    NProgress.done();
                }
            }
        }
    }else{
        /* 没有token */
        // if(whiteList.indexOf(to.path) !== -1){
        if(whiteList.includes(to.path)){
            //在白名单中的应该放行
            next();
        }else{
            //其他没有token的页面重定向到login页
            next(`/login?redirect=${to.path}`); //带一个从哪来的参数
            NProgress.done();
        }
    }

})

//离开所有路由
router.afterEach(()=>{
    NProgress.done();
});


export default router