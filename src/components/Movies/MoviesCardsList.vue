<script setup lang="ts">
import { getPopularMoviesList } from '@/services/getPopularMoviesList.ts'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import MovieCard from '@/components/Movies/MovieCard.vue'
import Pagination from '@/components/UI/Pagination.vue'

const { isLoading, result: moviesData } = useFetchWithMinLoading(getPopularMoviesList)
</script>
<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
    <div v-if="isLoading" class="text-white">Loading...</div>
    <MovieCard
      v-else-if="moviesData && moviesData.results"
      v-for="movieInfo in moviesData.results"
      :cardInfo="movieInfo"
      :key="movieInfo.id"
    />
  </div>
  <Pagination v-if="moviesData && moviesData.total_pages" :total="moviesData.total_pages" />
</template>
