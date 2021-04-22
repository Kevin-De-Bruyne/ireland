import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from "vue-awesome-swiper"
// import 'lib-flexible'
import "swiper/dist/css/swiper.css";
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload'
import 'vant/lib/index.css';
import {
    Toast,
    Swipe,
    SwipeItem,
    Cell,
    CellGroup,
    Button,
    Switch,
    RadioGroup,
    Radio,
    CheckboxGroup,
    Checkbox,
    Tabs,
    Tab,
    Stepper,
    NumberKeyboard,
    Popup,
    Dialog,
    SwipeCell,
    Uploader,
    Circle,
    ShareSheet,
    Rate,
    Icon,
    Progress
} from 'vant'
Vue.use(Swipe)
    .use(SwipeItem)
    .use(Cell)
    .use(CellGroup)
    .use(Button)
    .use(Switch)
    .use(RadioGroup)
    .use(Radio)
    .use(CheckboxGroup)
    .use(Checkbox)
    .use(Tabs)
    .use(Toast)
    .use(Circle)
    .use(ShareSheet)
    .use(Tab)
    .use(Stepper)
    .use(NumberKeyboard)
    .use(Popup)
    .use(Dialog)
    .use(SwipeCell)
    .use(Uploader)
    .use(Rate)
    .use(Icon)
    .use(Progress)
    // 使用懒加载的插件
Vue.use(VueLazyLoad, {
    loading: require('./assets/logo.png')
})
Vue.use(ElementUI);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'en',
    messages: {
        en: require("./i18n/lang/en.js"), //英文文件路径
        zh: require("./i18n/lang/cn.js"), //中文文件路径
    },
    silentTranslationWarn: true
})
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
let baseurl = 'http://b.myfutrue.com'
    // let baseurl = 'http://ireland.com'
Vue.prototype.baseURL = baseurl
axios.defaults.baseURL = baseurl
Vue.prototype.$ajax = ({ url, data = {}, headers = {}, methods = 'post' }) => {
    // data.token = localStorage.getItem('token')

    return new Promise((ok, err) => {
        // if(lurl){
        //   //避免重复请求
        //   err('请勿重新请求了')
        //   return
        // }
        Toast.loading({
            duration: 1500,
            forbidClick: true
        })
        axios[methods](url,
            // 这里是否请求成功
            methods == 'post' ? data : { params: data }, { headers }).then(res => {
            console.log(res)
                // Toast.clear()
            if (res.data.status == 200 || res.data.code == 200 || res.data.status == 500) {
                // 这里是是否成功获取到数据
                ok(res.data)
                    // console.log(res.data)
            } else {
                console.log(res)
                Toast({
                        message: 'Please Login',
                        duration: 3000
                    })
                    // err(res)
                router.push('/login')
                return

            }
        }).catch(fill => {
            // console.log(fill)
            // Toast.clear()
            // Toast.fail('请求失败')

        })
    })

}
router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    next()
})
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')