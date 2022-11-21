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
        component: () => import('../views/home.vue')
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

