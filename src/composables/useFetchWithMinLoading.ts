import { ref, watch, type WatchSource } from 'vue'
import { HttpStatusCode } from 'axios'

type Options = {
  minLoadingTimeMs?: number
  // Позволяем передавать массив зависимостей для отслеживания (например, [movieId])
  dependencies?: WatchSource<unknown>[]
}

export function useFetchWithMinLoading<T>(
  fetchData: () => Promise<T>,
  { minLoadingTimeMs = 600, dependencies = [] }: Options = {},
) {
  const isLoading = ref(false)
  const result = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const notFound = ref(false)
  const hasError = ref(false)

  const reloadKey = ref(0)
  const refetch = () => reloadKey.value++

  watch(
    [reloadKey, ...dependencies],
    (newValues, oldValues, onCleanup) => {
      let cancelled = false

      const loadStartTime = Date.now()

      isLoading.value = true
      notFound.value = false
      hasError.value = false
      error.value = null

      onCleanup(() => {
        cancelled = true
      })

      const resolveRemainingTime = (fn: () => void) => {
        const timePassed = Date.now() - loadStartTime
        const remaining = minLoadingTimeMs - timePassed

        setTimeout(
          () => {
            if (cancelled) return
            fn()
            isLoading.value = false
          },
          Math.max(0, remaining),
        )
      }

      fetchData()
        .then((data) => {
          resolveRemainingTime(() => {
            result.value = data
          })
        })
        .catch((err) => {
          const status = (err as { response?: { status?: number } })?.response?.status
          resolveRemainingTime(() => {
            error.value = err instanceof Error ? err : new Error('Loading error')
            if (status === HttpStatusCode.NotFound) notFound.value = true
            else hasError.value = true
          })
        })
    },
    { immediate: true },
  )

  return {
    isLoading,
    result,
    error,
    notFound,
    hasError,
    refetch,
  }
}
