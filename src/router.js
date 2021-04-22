import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/product'
import healthyList from './views/healthyList'
import healthyDetail from './views/healthyDetail'
import Tips from './views/Tips'
import Tips2 from './views/Tips2'
import TipsDetail from './views/TipsDetail'
import Contact from './views/contact'
import Translate from './views/translate'
import healthyList2 from './views/healthyList2'
Vue.use(Router)

export default new Router({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes: [{
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/healthyList2',
                name: 'healthyList2',
                component: healthyList2
            },
            {
                path: '/translate',
                name: 'translate',
                component: Translate
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact
            },
            {
                path: '/product',
                name: 'product',
                component: Product
            },
            {
                path: '/tips',
                name: 'tips',
                component: Tips
            },
            {
                path: '/tips2',
                name: 'tips2',
                component: Tips2
            },
            {
                path: '/healthyDetail',
                name: 'healthyDetail',
                component: healthyDetail
            },
            {
                path: '/tipsDetail',
                name: 'tipsDetail',
                component: TipsDetail
            },
            {
                path: '/healthyList',
                name: 'healthyList',
                component: healthyList
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ './views/About.vue')
            }
        ]
    })
    //获取原型对象上的push函数
const originalPush = Router.prototype.push
    //修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}