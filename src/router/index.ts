import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
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
