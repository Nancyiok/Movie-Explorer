import { useRouter } from 'vue-router'
import {ROUTES} from '@/constants/navigationPath.ts'

export function useMovieNavigation() {
  const router = useRouter()

  const goToMainPage = () => {
    router.push(ROUTES.SEARCH_MOVIES)
  }

  return {
    goToMainPage,
  }
}
