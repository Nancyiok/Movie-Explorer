import { ROUTES } from '../constants/navigationPath.ts'
import PopularMoviesView from '@/views/PopularMoviesView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'
import ActorDetailsView from '@/views/ActorDetailsView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export const publicRoutes = [
  {
    path: ROUTES.SEARCH_MOVIES,
    name: 'movie-search',
    component: PopularMoviesView,
    meta: { title: 'Search Movies' },
  },
  {
    path: `${ROUTES.MOVIE}/:id`,
    name: 'movie-details',
    component: MovieDetailsView,
    meta: { title: 'Movie Details' },
  },
  {
    path: `${ROUTES.ACTOR}/:id`,
    name: 'actor-details',
    component: ActorDetailsView,
    meta: { title: 'Actor Details' },
  },
  {
    path: ROUTES.LOGIN,
    name: 'login',
    component: LoginView,
    meta: { title: 'Login' },
  },
  {
    path: ROUTES.REGISTER,
    name: 'register',
    component: 'RegisterPage',
    meta: { title: 'Register' },
  },
  {
    path: ROUTES.FORGOT,
    name: 'forgot-password',
    component: 'ForgotPage',
    meta: { title: 'Forgot Password' },
  },
]

export const protectedRoutes = [
  {
    path: ROUTES.PROFILE,
    name: 'profile',
    component: 'ProfilePage',
    meta: { title: 'My Profile' },
  },
  {
    path: ROUTES.FAVORITES_MOVIES,
    name: 'favorites',
    component: 'FavoritesPage',
    meta: { title: 'Favorite Movies' },
  },
  {
    path: ROUTES.WATCH_LIST_MOVIES,
    name: 'watch-list',
    component: 'Watch List',
    meta: { title: 'Your Watch List' },
  },
]

export const authRoutes = protectedRoutes.map((route) => ({
  ...route,
  meta: {
    ...route.meta,
    requiresAuth: true,
  },
}))

export const routes = [
  ...publicRoutes,
  ...authRoutes,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]
