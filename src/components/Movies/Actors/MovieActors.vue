<script setup lang="ts">
import { computed  } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieActors } from '@/services/actorsService.ts'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'

import MovieActorsList from '@/components/Movies/Actors/MovieActorsList.vue'
import MovieActorsSkeleton from '@/components/Movies/Actors/MovieActorsSkeleton.vue'

const route = useRoute()
const movieId = computed(() => route.params.id)

const { isLoading, result: actorsResponse } = useFetchWithMinLoading(() =>
  getMovieActors(movieId.value),
)

const actorsCast = computed(() => actorsResponse.value?.cast || [])
</script>

<template>
  <section class="mt-12 max-w-7xl mx-auto px-4">
    <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
      <span>Cast</span>
    </h2>

    <MovieActorsSkeleton v-if="isLoading" />

    <MovieActorsList v-else-if="actorsCast.length > 0" :actors="actorsCast" />

    <div v-else class="text-gray-400 text-sm py-4">
      No cast information available for this movie.
    </div>
  </section>
</template>
