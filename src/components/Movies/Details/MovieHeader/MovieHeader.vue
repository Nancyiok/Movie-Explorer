<script setup lang="ts">
import type { MovieDetails } from '@/types/movies.js'
import { Image } from '@unpic/vue'
import { computed } from 'vue'
import GenreLabel from '@/components/Movies/Details/GenreLabel.vue'
import BackButton from '@/components/UI/BackButton.vue'
import UppercaseTitle from '@/components/UI/UppercaseTitle.vue'
import MovieHeaderSkeleton from '@/components/Movies/Details/MovieHeader/MovieHeaderSkeleton.vue'

interface Props {
  movieDetails: MovieDetails | null
  isLoading: boolean
}

const { movieDetails, isLoading } = defineProps<Props>()

const moviePoster = computed(
  () => `${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${'w780'}/${movieDetails?.backdrop_path}`,
)
</script>

<template>
  <MovieHeaderSkeleton v-if="isLoading" />
  <div class="relative" v-else-if="!isLoading && !!movieDetails">
    <BackButton />
    <Image
      :src="moviePoster"
      class="w-full h-120 object-cover object-top rounded-[40px]"
      :alt="`${movieDetails.title} poster`"
    />

    <div
      class="absolute inset-0 bg-gradient-to-b from-violet-900/40 to-blue-900/40 rounded-[40px]"
    ></div>

    <div
      class="absolute lg:bottom-[-60px] bottom-[-40px] lg:left-[10%] left-[5%] bg-black/65 text-gray-50 lg:p-10 p-6 rounded-[24px] backdrop-blur md:w-[45%] w-[90%] shadow-2xl"
    >
      <h3 class="text-2xl md:text-3xl font-bold mb-3">{{ movieDetails.title }}</h3>

      <div class="flex flex-wrap gap-2 items-center">
        <UppercaseTitle title="Genres" />
        <GenreLabel v-for="genre in movieDetails.genres" :key="genre.id" :genre="genre" />
      </div>
    </div>
  </div>
</template>
