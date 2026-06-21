<script setup lang="ts">
import ArrowBack from '@/assets/icons/arrowBack.svg?component'
import { useMovieNavigation } from '@/composables/useToMainPageNavigation.ts'
const { goToMainPage } = useMovieNavigation()
</script>

<template>
  <button
    @click="goToMainPage"
    class="absolute top-6 left-6 p-3 z-20 flex items-centerbg-black/40 text-gray-50 rounded-full backdrop-blur bg-black/65 hover:bg-violet-500 cursor-pointer transition-all duration-300"
  >
    <ArrowBack />
  </button>
</template>
