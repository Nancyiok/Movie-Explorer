<script setup lang="ts">
import type { MovieDetails } from '@/types/movies.js'
import VoteAverageMovieLabel from '@/components/Movies/Card/VoteAverageMovieLabel.vue'
import MovieMetaRow from '@/components/Movies/Details/InfoColumn/MovieMetaRow.vue'
import { formatCurrency } from '@/utils/formatCurrency.js'
import InfoColumnSkeleton from '@/components/Movies/Details/InfoColumn/InfoColumnSkeleton.vue'
interface Props {
  movieDetails: MovieDetails | null
}

const { movieDetails } = defineProps<Props>()
</script>

<template>
  <div
    v-if="movieDetails"
    class="text-gray-200 p-6 md:p-10 rounded-[24px] backdrop-blur max-w-2xl space-y-6"
  >
    <h2
      v-if="movieDetails.tagline"
      class="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug"
    >
      {{ movieDetails.tagline }}
    </h2>

    <VoteAverageMovieLabel
      :voteAverage="movieDetails.vote_average"
      :voteCount="movieDetails.vote_count"
    />

    <p class="text-gray-300 leading-relaxed text-sm md:text-base font-normal">
      {{ movieDetails.overview || 'No description available for this movie.' }}
    </p>

    <div class="space-y-4 pt-4 border-t border-white/10 text-sm md:text-base">
      <MovieMetaRow title="Release Date" :value="movieDetails.release_date" />

      <MovieMetaRow title="Run time" :value="`${movieDetails.runtime} min`" />

      <MovieMetaRow title="Budget" :value="formatCurrency(movieDetails.budget)" />

      <MovieMetaRow title="Revenue" :value="formatCurrency(movieDetails.revenue)" />
    </div>
  </div>
</template>
