<script setup lang="ts">
import { getMovieDetails } from '@/services/moviesService.js'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import MovieHeader from '@/components/Movies/Details/MovieHeader/MovieHeader.vue'
import InfoColumn from '@/components/Movies/Details/InfoColumn/InfoColumn.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const movieId = computed(() => route.params.id)
import PosterColumn from '@/components/Movies/Details/PosterColumn/PosterColumn.vue'
import MovieDetailsSkeleton from '@/components/Movies/Details/MovieDetailsSkeleton.vue'

const { isLoading, result: movie } = useFetchWithMinLoading(() => getMovieDetails(movieId.value))

</script>
<template>
  <MovieDetailsSkeleton v-if="isLoading && !movie" />
  <template v-if="movie">
    <MovieHeader :movieDetails="movie" />

    <div
      class="grid md:grid-cols-[auto_auto] grid-cols-[1fr] lg:mt-25 mt-20 items-center justify-between"
    >
      <PosterColumn :movieDetails="movie" />
      <InfoColumn :movieDetails="movie" />
    </div>
  </template>
</template>
