import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "base" */ '@/pages/home')
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  // Sample navigation guard
  if (!store.getters.isAuthenticated && to.name !== 'login') {
    next({ path: '/login' })
    return false
  }

  next()
})

export default router
