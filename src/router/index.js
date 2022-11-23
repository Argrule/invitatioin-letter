import { createRouter, createWebHistory } from "vue-router"
import Letter from "@/views/letter.vue"
import Letter_m from "@/views/letter_m.vue"
const routes = [
    {
        path: '/',           
    },
    {
        path: '/letter',
        name: 'letter',
        component: Letter
    },
    {
        path: '/letter_m',
        name: 'letter_m',
        component: Letter_m
    },
    {
        path: '/home',
        name: 'home',
        redirect:'/home/page1',
        component: () => import('../views/home.vue'),
        children:[
            {
                path:'page1',
                component: () => import('../components/page1.vue')
            },
            {
                path:'page2',
                component: () => import('../components/page2.vue')
            },
            {
                path:'page3',
                component: () => import('../components/page3.vue')
            },
            {
                path:'page4',
                component: () => import('../components/page4.vue')
            }
        ]
    },
    {
        path: '/home_m',
        name: 'home_m',
        redirect:'/home_m/page1',
        component: () => import('../views/home_m.vue'),
        children:[
            {
                path:'page1',
                component: () => import('../components/page1.vue')
            },
            {
                path:'page2',
                component: () => import('../components/page2.vue')
            },
            {
                path:'page3',
                component: () => import('../components/page3.vue')
            },
            {
                path:'page4',
                component: () => import('../components/page4.vue')
            }
        ]
    },
    // 收集信息页面
    {
        path: '/collect',
        name: 'collect',
        component: () => import('../views/collectInfo.vue')
    },
    // debug   
    {
        path: '/form',
        name: 'form',
        component: () => import('../views/form.vue')
    }   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

