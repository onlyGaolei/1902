import Home from '../views/Home.vue'
import luyou from './module/luyou'
export const routesList = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/admin/home/',
        children: [
            ...luyou
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    }
]