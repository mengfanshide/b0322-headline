import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        // name: "Home",
        component: Home,
        meta: { title: '首页' }
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/login',
        // name: "Home",
        component: () => import('../views/Login'),
        meta: { title: '登录' }
    }
];

const router = new VueRouter({
    routes
});

export default router;
