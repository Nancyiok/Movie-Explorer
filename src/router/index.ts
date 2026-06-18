import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

const routes = [
  { path: '/', name: 'Home', component: '' },
  { path: '/login', name: 'Login', component: '' },
  { path: '/profile', name: 'Profile', component: '', meta: { requiresAuth: true } },
]

router.beforeEach((to, from, next) => {
  // const authStore = useAuthStore()

  // if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login')
  // } else {
  //   next()
  // }
})

export default router
