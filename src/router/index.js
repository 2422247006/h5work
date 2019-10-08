import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/pages/manage'
import home from '@/pages/home/home.vue'
// import about from '@/pages/about'
// import product from '@/pages/product'


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
                // {
                //     path: '/about',
                //     component: about,
                //     meta: [],
                // },
                // {
                //     path: '/product',
                //     component: product,
                //     meta: [],
                //     }
            ]
        }
    ]
})