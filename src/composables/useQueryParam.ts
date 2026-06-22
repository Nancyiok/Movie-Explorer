import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

export function useQueryParam() {
  const route = useRoute()
  const router = useRouter()

  const setQuery = (key: string, value: string | number | null | undefined) => {
    const newQuery = { ...route.query }
    if (value === null || value === undefined || value === '') {
      delete newQuery[key]
    } else {
      newQuery[key] = String(value)
    }

    router.push({ query: newQuery })
  }

  const getQuery = (key: string) => {
    return computed(() => route.query[key])
  }

  return { setQuery, getQuery }
}
