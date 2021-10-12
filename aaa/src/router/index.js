import Vue from 'vue'
import VueRouter from 'vue-router'
import {routesList} from './routes'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  routes: routesList
})

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('vuex')
  if (!tokenStr) return next('/login')
  next()
})

export default router
