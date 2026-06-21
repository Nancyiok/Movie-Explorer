<script setup lang="ts">
import { computed } from 'vue'
import type { Movie } from '@/types/movies.js'
import VoteAverageMovieLabel from '@/components/Movies/Card/VoteAverageMovieLabel.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/constants/navigationPath.js'
import { Image } from '@unpic/vue'
import { getImageUrl } from '@/utils/getImageUrl.ts'

interface Props {
  cardInfo: Movie
  isLoading: boolean
}

const { cardInfo } = defineProps<Props>()
const router = useRouter()

const moviePoster = computed(() => getImageUrl(cardInfo.poster_path))

const navigateToMovieDetail = () => {
  router.push(`${ROUTES.MOVIE}/${cardInfo.id}`)
}
</script>

<template>
  <article
    class="bg-slate-800/80 p-2 rounded-[12px] w-full max-w-sm relative cursor-pointer"
    @click="navigateToMovieDetail"
  >
    <VoteAverageMovieLabel
      :voteAverage="cardInfo.vote_average"
      class="absolute left-4 top-[16px] z-10"
    />
    <div class="overflow-hidden bg-cover bg-no-repeat rounded-[8px]">
      <Image
        :src="moviePoster"
        class="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <p class="text-white p-2">{{ cardInfo.title }}</p>
  </article>
</template>
