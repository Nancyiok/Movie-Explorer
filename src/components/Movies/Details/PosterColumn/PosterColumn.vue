<script setup lang="ts">
import { computed } from 'vue'
import LazyImage from '@/components/UI/LazyImage.vue'
import type { MovieDetails } from '@/types/movies.js'
import { getImageUrl } from '@/utils/getImageUrl.js'

interface Props {
  movieDetails: MovieDetails
}

const { movieDetails } = defineProps<Props>()

const posterUrl = computed(() => getImageUrl(movieDetails.poster_path))
</script>

<template>
  <div
    class="w-full mx-auto lg:mx-0 rounded-4xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40 backdrop-blur group p-2 transition-all duration-500 hover:border-white/20 hover:shadow-violet-950/20"
  >
    <div class="w-full rounded-3xl overflow-hidden relative">
      <LazyImage
        :src="posterUrl"
        imageClass="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
        :alt="`${movieDetails.title} movie poster`"
        placeholderClass="min-h-[600px] min-w-[500px]"
      />
    </div>
  </div>
</template>
