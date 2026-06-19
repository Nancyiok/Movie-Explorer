import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes, authRoutes } from './routes'

const routes = [...publicRoutes, ...authRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   // const authStore = useAuthStore()
//
//   // if (to.meta.requiresAuth && !authStore.isLoggedIn) {
//   //   next('/login')
//   // } else {
//   //   next()
//   // }
// })

export default router
