<script setup lang="ts">
import type { MovieDetails } from '@/types/movies.ts'
import VoteAverageMovieLabel from '@/components/Movies/Card/VoteAverageMovieLabel.vue'
import MovieMetaRow from '@/components/Movies/Details/MovieMetaRow.vue'
import { formatCurrency } from '@/utils/formatCurrency.ts'

interface Props {
  movieDetails: MovieDetails
}

const { movieDetails } = defineProps<Props>()

const {
  tagline,
  overview,
  vote_average: voteAverage,
  vote_count: voteCount,
  release_date: releaseDate,
  runtime,
  budget,
  revenue,
} = movieDetails
</script>

<template>
  <div
    class="text-gray-200 p-6 md:p-10 rounded-[24px] backdrop-blur max-w-2xl space-y-6"
  >
    <h2
      v-if="tagline"
      class="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug"
    >
      {{ tagline }}
    </h2>
    <VoteAverageMovieLabel :voteAverage="voteAverage" :voteCount="voteCount" />

    <p class="text-gray-300 leading-relaxed text-sm md:text-base font-normal">
      {{ overview || 'No description available for this movie.' }}
    </p>


    <div class="space-y-4 pt-4 border-t border-white/10 text-sm md:text-base">
      <MovieMetaRow title="Release Date" :value="releaseDate" />

      <MovieMetaRow title="Run time" :value="`${runtime} min`" />

      <MovieMetaRow title="Budget" :value="formatCurrency(budget)" />

      <MovieMetaRow title="Revenue" :value="formatCurrency(revenue)" />
    </div>
  </div>
</template>
