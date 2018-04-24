import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import header from '@/components/header'
import footer from '@/components/footer'
import navbar from '@/components/navbar'


Vue.use(Router)
Vue.component("head-top", header)
Vue.component("footer-tom", footer)
Vue.component("navbar", navbar)


export default new Router({
    routes: [{
        path: '/',
        component: index
    }]
})