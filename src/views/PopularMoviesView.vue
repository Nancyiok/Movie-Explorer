<script setup lang="ts">
import MoviesCardsList from '@/components/Movies/MoviesCardsList.vue'
import CinemaClapper from '@/assets/icons/cinema-clapper.svg?component'
</script>

<template>
  <header class="flex items-center gap-4">
    <h3 class="text-gray-50 font-semibold">Lights, Camera, Action!</h3>
    <CinemaClapper class="w-10 h-10 text-violet-500" />
  </header>
  <p class="text-gray-300 mt-4 mb-6">
    Hey there! Welcome to your ultimate movie destination. Whether you're hunting for tonight’s
    blockbuster, looking for a hidden gem, or just want to dive deep into your favorite actor's
    filmography — we’ve got it all. Grab some popcorn, pick a seat, and let’s explore!
  </p>
  <MoviesCardsList />
</template>
