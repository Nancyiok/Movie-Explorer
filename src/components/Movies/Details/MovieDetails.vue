<script setup lang="ts">
import { getMovieDetails } from '@/services/moviesService.js'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import MovieHeader from '@/components/Movies/Details/MovieHeader/MovieHeader.vue'
import InfoColumn from '@/components/Movies/Details/InfoColumn.vue'
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const movieId = computed(() => route.params.id)
import PosterColumn from '@/components/Movies/Details/PosterColumn.vue'

const { isLoading, result: movie } = useFetchWithMinLoading(() => getMovieDetails(movieId.value), {
  minLoadingTimeMs: 600,
  dependencies: [movieId],
})

watchEffect(() => {
  console.log(isLoading.value)
  console.log(movie.value)
})
</script>
<template>
  <MovieHeader :movieDetails="movie" :isLoading="isLoading" />
  <div
    class="grid md:grid-cols-[auto_auto] grid-cols-[1fr] lg:mt-25 mt-20 items-center justify-between"
  >
    <PosterColumn :movieDetails="movie" :isLoading="isLoading" />
    <InfoColumn :movieDetails="movie" />
  </div>
</template>
