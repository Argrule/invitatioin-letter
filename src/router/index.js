import { createRouter, createWebHistory } from "vue-router"
import Letter from "@/views/letter.vue"
const routes = [
    {
        path: '/',
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
                component: () => import('../components/HelloWorld.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

