import { useRouter } from 'vue-router'
import { ROUTES } from '@/constants/navigationPath.ts'

export function useMovieNavigation(query: any) {
  const router = useRouter()

  const goToMainPage = () => {
    router.push({
      path: ROUTES.SEARCH_MOVIES,
      ...(query && query),
    })
  }

  return {
    goToMainPage,
  }
}
