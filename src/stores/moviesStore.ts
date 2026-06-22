import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getPopularMovies, searchMovies } from '@/services/moviesService.js'
import { withMinDelay } from '@/composables/withMinDelay.ts'
import type { Movie } from '@/types/movies.ts'

export const useMovieStore = defineStore('movies', () => {
  const allMovies = ref<Movie[]>([])
  const isLoading = ref(false)
  const page = ref(1)
  const searchQuery = ref('')
  const totalPages = ref(1)
  const totalResults = ref(0)

  const fetchMoviesData = async (targetPage: number = 1, query: string = '') => {
    isLoading.value = true
    page.value = targetPage
    searchQuery.value = query

    try {
      const fetchAction = query.trim()
        ? () => searchMovies(query, targetPage)
        : () => getPopularMovies(targetPage)

      const data = await withMinDelay(fetchAction, 600)

      allMovies.value = data.results
      totalPages.value = data.total_pages
      totalResults.value = data.total_results
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }


  let debounceTimeout: ReturnType<typeof setTimeout>
  const searchWithDebounce = (query: string) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      fetchMoviesData(1, query)
    }, 500)
  }

  return {
    allMovies,
    isLoading,
    page,
    searchQuery,
    totalPages,
    totalResults,
    fetchMoviesData,
    searchWithDebounce,
  }
})
