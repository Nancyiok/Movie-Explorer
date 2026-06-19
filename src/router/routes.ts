import { ROUTES } from '../constants/navigationPath.ts'
import SearchMoviesView from '@/views/SearchMoviesView.vue'

export const publicRoutes = [
  { path: ROUTES.SEARCH_MOVIES, name: 'Search Movies', component: SearchMoviesView },
  { path: ROUTES.LOGIN, name: 'Login', component: 'LoginPage' },
  { path: ROUTES.REGISTER, name: 'Register', component: 'RegisterPage' },
  { path: ROUTES.FORGOT, name: 'Forgot Password', component: 'ForgotPage' },
]

export const protectedRoutes = [
  { path: ROUTES.PROFILE, name: 'Profile', component: 'ProfilePage' },
  { path: ROUTES.FAVORITES_MOVIES, name: 'Favorites', component: 'FavoritesPage' },
  { path: ROUTES.WATCH_LIST_MOVIES, name: 'Watch list', component: 'WatchListPage' },
]

export const authRoutes = protectedRoutes.map((route) => ({
  ...route,
  meta: { requiresAuth: true },
}))
