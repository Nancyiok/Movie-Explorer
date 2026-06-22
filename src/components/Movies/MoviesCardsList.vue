<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Paginator from 'primevue/paginator'
import MovieCard from '@/components/Movies/Card/MovieCard.vue'
import MovieCardSkeleton from '@/components/Movies/Card/MovieCardSkeleton.vue'
import { useMovieStore } from '@/stores/moviesStore.ts'
import { useQueryParam } from '@/composables/useQueryParam.ts'
import InputBase from '@/components/UI/InputBase.vue'
import SearchIcon from '@/assets/icons/search.svg?component'

const movieStore = useMovieStore()
const { setQuery, getQuery } = useQueryParam()

const elementsPerPage = ref(20)

const currentPage = computed(() => Number(getQuery('page').value) || 1)
const currentSearch = computed(() => (getQuery('search').value as string) || '')

const first = computed(() => (currentPage.value - 1) * elementsPerPage.value)

watch(
  [currentPage, currentSearch],
  ([page, search], [, oldSearch]) => {
    if (search !== oldSearch) {
      setQuery('page', 1)
      movieStore.searchWithDebounce(search)
      return
    }
    movieStore.fetchMoviesData(page, search)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true },
)

const onPageChange = (event: any) => {
  const targetPage = event.page + 1
  setQuery('page', targetPage)
}

const onSearchChange = (value: string) => {
  setQuery('search', value || null)
}

const moviesListContainer = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
</script>

<template>
  <div class="container mx-auto p-4 flex flex-col min-h-screen justify-between">
    <div class="mb-6 max-w-md">
      <InputBase
        :modelValue="currentSearch"
        label="Search movies"
        :leftIcon="SearchIcon"
        placeholder="eg. Avatar"
        @update:model-value="onSearchChange"
      />
    </div>

    <div>
      <div v-if="movieStore.isLoading" :class="moviesListContainer">
        <MovieCardSkeleton v-for="i in elementsPerPage" :key="i" />
      </div>

      <div v-else-if="movieStore.allMovies.length > 0" :class="moviesListContainer">
        <MovieCard v-for="movie in movieStore.allMovies" :key="movie.id" :cardInfo="movie" />
      </div>

      <div v-else class="text-center text-gray-500 my-12">
        Nothing found by search "{{ currentSearch }}"
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <Paginator
        :first="first"
        :rows="elementsPerPage"
        :totalRecords="movieStore.totalResults"
        @page="onPageChange"
      />
    </div>
  </div>
</template>
