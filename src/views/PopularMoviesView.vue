<script setup lang="ts">
import MoviesCardsList from '@/components/Movies/MoviesCardsList.vue'
</script>

<style scoped></style>
<template>
  <div class="px-30">
    <h3 class="text-gray-50 font-semibold">Lights, Camera, Action!</h3>
    <p class="text-gray-300 mt-4 mb-6">
      Hey there! Welcome to your ultimate movie destination. Whether you're hunting for tonight’s
      blockbuster, looking for a hidden gem, or just want to dive deep into your favorite actor's
      filmography — we’ve got it all. Grab some popcorn, pick a seat, and let’s explore!
    </p>
    <MoviesCardsList />
  </div>
</template>
