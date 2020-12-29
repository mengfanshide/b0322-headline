import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Main from '../views/Home/main.vue';
import Table from '../views/Table';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        // name: "Home",
        component: Home,
        meta: { title: '首页' },
        children: [
            {
                path: '',
                component: Main
            },
        ]
    },
    {
        path: '/home',
        // redirect: '/',
        component: Home,
        children: [
            {
                path: '',
                component: Main
            },
            {
                path: 'table',
                component: Table
            },
            {
                path: 'account',
                component: ()=>import('../views/account')
            }

        ]
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
