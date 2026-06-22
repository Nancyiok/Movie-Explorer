import { ref, watch, type WatchSource } from 'vue'
import axios, { HttpStatusCode } from 'axios'

type Options = {
  minLoadingTimeMs?: number
  dependencies?: WatchSource<unknown>[]
}

export function useFetchWithMinLoading<T>(
  fetchData: (signal: AbortSignal) => Promise<T>,
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
    async (newValues, oldValues, onCleanup) => {
      const abortController = new AbortController()
      onCleanup(() => abortController.abort())

      const loadStartTime = Date.now()
      isLoading.value = true
      notFound.value = false
      hasError.value = false
      error.value = null

      const resolveRemainingTime = (fn: () => void) => {
        const timePassed = Date.now() - loadStartTime
        const remaining = minLoadingTimeMs - timePassed

        setTimeout(
          () => {
            fn()
            isLoading.value = false
          },
          Math.max(0, remaining),
        )
      }

      try {
        const data = await fetchData(abortController.signal)
        console.log(data)
        resolveRemainingTime(() => {
          result.value = data
        })
      } catch (err) {
        if (axios.isCancel(err)) return

        const status = (err as { response?: { status?: number } })?.response?.status

        resolveRemainingTime(() => {
          error.value = err instanceof Error ? err : new Error('Loading error')
          if (status === HttpStatusCode.NotFound) {
            notFound.value = true
          } else {
            hasError.value = true
          }
        })
      }
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
