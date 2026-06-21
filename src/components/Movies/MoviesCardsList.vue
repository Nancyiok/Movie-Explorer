<script setup lang="ts">
import { getPopularMovies } from '@/services/moviesService.js'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import MovieCard from '@/components/Movies/Card/MovieCard.vue'
import MovieCardSkeleton from '@/components/Movies/Card/MovieCardSkeleton.vue'
const { isLoading, result: moviesData } = useFetchWithMinLoading(getPopularMovies)

const moviesListContainer = 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'
</script>
<template>
  <div v-if="isLoading" :class="moviesListContainer">
    <MovieCardSkeleton v-for="i in 20" :key="i" />
  </div>
  <div :class="moviesListContainer">
    <MovieCard
      v-if="moviesData && moviesData.results"
      v-for="movieInfo in moviesData.results"
      :cardInfo="movieInfo"
      :key="movieInfo.id"
      :isLoading="isLoading"
    />
  </div>
</template>
