import { createRouter, createWebHistory } from "vue-router"
import Letter from "@/views/letter.vue"
const routes = [
    {
        path: '/',
        redirect:'/letter'        
    },
    {
        path: '/letter',
        name: 'letter',
        component: Letter
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
    // 收集信息页面
    {
        path: '/collect',
        name: 'collect',
        component: () => import('../views/collectInfo.vue')
    }   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

