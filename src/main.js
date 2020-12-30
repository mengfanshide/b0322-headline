import Vue from 'vue';
import App from './App.vue';
import axios from './utils/axios.config.js';
import './assets/css/reset.css';
import ElementUI from 'element-ui'; //全组件用法
import './assets/element-#0C2E51/index.css';
// import 'element-ui/lib/theme-chalk/index.css'
import router from './router/premission.js';
console.log(process.env);
//把axios放在Vue的原型上, 以后就可以在实例中调用
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
//使用组件, 注册全局插件
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
