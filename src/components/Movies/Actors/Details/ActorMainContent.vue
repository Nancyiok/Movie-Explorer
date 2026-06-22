<script setup lang="ts">
import MovieCard from '@/components/Movies/Card/MovieCard.vue'
import type { Movie } from '@/types/movies.ts'

defineProps<{
  name: string
  biography?: string | null
  movies: Movie[]
}>()
</script>

<template>
  <div class="md:col-span-2">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
      {{ name }}
    </h2>

    <div class="mb-10">
      <h2 class="text-2xl font-bold text-gray-200 mb-3">Biography</h2>
      <p class="text-gray-400 leading-relaxed whitespace-pre-line text-justify">
        {{ biography || `We don't have a biography for ${name}.` }}
      </p>
    </div>

    <div v-if="movies.length > 0">
      <h2 class="text-2xl font-bold text-gray-200 mb-6">Known For</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <MovieCard v-for="movie in movies" :key="movie.id" :cardInfo="movie" />
      </div>
    </div>
  </div>
</template>
