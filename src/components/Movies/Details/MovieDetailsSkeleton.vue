<script setup lang="ts">
import MovieHeaderSkeleton from '@/components/Movies/Details/MovieHeader/MovieHeaderSkeleton.vue'
import PosterColumnSkeleton from '@/components/Movies/Details/PosterColumn/PosterColumnSkeleton.vue'
import InfoColumnSkeleton from '@/components/Movies/Details/InfoColumn/InfoColumnSkeleton.vue'
</script>

<template>
  <MovieHeaderSkeleton />
  <div
    class="grid md:grid-cols-[auto_minmax(0,672px)] grid-cols-[1fr] lg:mt-25 mt-20 items-center justify-between"
  >
    <PosterColumnSkeleton />
    <InfoColumnSkeleton />
  </div>
</template>

<style scoped></style>
