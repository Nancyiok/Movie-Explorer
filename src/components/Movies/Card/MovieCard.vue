<script setup lang="ts">
import { computed } from 'vue'
import type { Movie } from '@/types/movies.js'
import VoteAverageMovieLabel from '@/components/Movies/Card/VoteAverageMovieLabel.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/constants/navigationPath.js'
import { getImageUrl } from '@/utils/getImageUrl.ts'
import LazyImage from '@/components/UI/LazyImage.vue'

interface Props {
  cardInfo: Movie
}

const { cardInfo } = defineProps<Props>()
const router = useRouter()

const posterAltText = computed(() => {
  return cardInfo.value?.title ? `"${cardInfo.value.title}" movie image` : 'Movie image'
})

const navigateToMovieDetail = () => {
  router.push({
    path: `${ROUTES.MOVIE}/${cardInfo.id}`,
    query: router.currentRoute.value.query,
  })
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
      <LazyImage
        :src="getImageUrl(cardInfo.poster_path)"
        :alt="posterAltText"
        imageClass="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
        placeholderClass="min-h-[400px]"
      />
    </div>
    <p class="text-white p-2">{{ cardInfo.title }}</p>
  </article>
</template>
