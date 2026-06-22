<script setup lang="ts">
import MovieActorCard from './MovieActorCard.vue'

defineProps<{
  actors: any[]
}>()
</script>

<template>
  <div class="flex gap-5 flex-wrap">
    <MovieActorCard v-for="actor in actors" :key="actor.id" :actor="actor" />
  </div>
</template>
