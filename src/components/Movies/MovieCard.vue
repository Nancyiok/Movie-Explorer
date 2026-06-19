<script setup lang="ts">
import { computed } from 'vue'
import type { Movie } from '@/types/movies.ts'
import VoteAverageMovieLabel from '@/components/Movies/VoteAverageMovieLabel.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/constants/navigationPath.ts'

interface Props {
  cardInfo: Movie
}

const { cardInfo } = defineProps<Props>()
const router = useRouter()

const moviePoster = computed(
  () => `${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${'w500'}/${cardInfo.poster_path}`
)

const navigateToMovieDetail = () => {
  router.push(`${ROUTES.MOVIE}/${cardInfo.id}`)
}
</script>

<template>
  <article
    class="bg-slate-800/80 p-2 rounded-[12px] w-full max-w-sm relative relative cursor-pointer"
    @click="navigateToMovieDetail"
  >
    <VoteAverageMovieLabel
      :voteAverage="cardInfo.vote_average"
      class="absolute left-4 top-[16px] z-10"
    />
    <div class="overflow-hidden bg-cover bg-no-repeat">
      <img
        :src="moviePoster"
        class="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <div class="flex item-center justify-between p-2"><p class="text-white">{{ cardInfo.title }}</p>
      <p>{{ cardInfo.release_date }}</p></div>
  </article>
</template>
