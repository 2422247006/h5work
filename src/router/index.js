import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/pages/manage'
import home from '@/pages/home.vue'
import city from '@/pages/city.vue'
import choice from '@/pages/choice.vue'


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
        }
        
    ]
})