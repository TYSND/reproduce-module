import Vue from 'vue'
import VueRouter from 'vue-router'

const AllIndex = () => import('@/views/AllIndex.vue')
const HomeIndex5837 = () => import('@/views/moban5837/HomeIndex')


Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        component: AllIndex
    },
    {
        path: '/home-index-5837',
        component: HomeIndex5837
    }
]

const router = new VueRouter({
    routes
})
export default router