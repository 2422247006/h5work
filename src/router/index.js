import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/pages/manage'
import home from '@/pages/home.vue'
import city from '@/pages/city.vue'
import choice from '@/pages/choice.vue'
import show from '@/pages/show.vue'
import time from '@/pages/time.vue'
import order from '@/pages/order.vue'
import orderall from '@/pages/orderall.vue'
import updown from '@/pages/updown.vue'
import my from '@/pages/my.vue'
import info from '@/pages/info.vue'
import password from '@/pages/password.vue'
import agree from '@/pages/agree.vue'
import register from '@/pages/register.vue'
import map from '@/pages/map.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: manage,
            name: 'manage',
            children: [
                {
                path: '',
                component: home,
                meta: [],
                },
                {
                    path: '/orderall',
                    component: orderall,
                    meta: []
                },
                {
                    path: '/my',
                    component: my,
                    meta: []
                }
            ]
        },
        {
            path: '/city',
            component: city,
            name: 'city'
        },
        {
            path: '/choice',
            component: choice,
            name: 'choice'
        },
        {
            path: '/show',
            component: show,
            name: 'show'
        },
        {
            path: '/time',
            component: time,
            name: 'time'
        },
        {
            path: '/order',
            component: order,
            name: 'order'
        },
        {
            path: '/updown',
            component: updown,
            name: 'updown'
        },
        {
            path: '/info',
            component: info,
            name: 'info'
        },
        {
            path: '/password',
            component: password,
            name: 'password'
        },
        {
            path: '/agree',
            component: agree,
            name: 'agree'
        },
        {
            path: '/register',
            component: register,
            name:'register'
        },
        {
            path: '/map',
            component:map,
            name:'map'
        }
        
    ]
})