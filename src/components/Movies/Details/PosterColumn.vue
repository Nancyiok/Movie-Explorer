<script setup lang="ts">
import { computed } from 'vue'
import { Image } from '@unpic/vue'
import type { MovieDetails } from '@/types/movies.ts'
import { getImageUrl } from '@/utils/getImageUrl.ts'

interface Props {
  movieDetails: MovieDetails
  isLoading: boolean
}

const { movieDetails, isLoading } = defineProps<Props>()

const posterUrl = computed(() => getImageUrl(movieDetails.poster_path))
</script>

<template>
  <div
    class="w-full mx-auto lg:mx-0 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40 backdrop-blur group p-2 transition-all duration-500 hover:border-white/20 hover:shadow-violet-950/20"
  >
    <div class="w-full rounded-[24px] overflow-hidden relative">
      <Image
        v-if="posterUrl"
        :src="posterUrl"
        class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        layout="constrained"
        :alt="`${movieDetails.title} poster`"
      />
    </div>
  </div>
</template>
