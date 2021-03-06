import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

const routerOptions = [
  { path: '/', component: 'Landing', beforeEnter: (to, from, next) => {
    const isAuthenticated = firebase.auth().currentUser
    if (isAuthenticated) { next('/home') } else { next() }}
  },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/nutritionUpload', component: 'Nutrition'},
  { path: '/user/:uid', component: 'User'},
  { path: '/notifications', component: 'Notifications'},
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
