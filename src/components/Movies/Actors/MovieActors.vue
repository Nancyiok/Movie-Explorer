<script setup lang="ts">
import { getMovieActors } from '@/services/moviesService.ts'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const movieId = computed(() => route.params.id)
const imageBasePath = computed(() => {
  // Результат: "https://image.tmdb.org/t/p/w185"
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}w185`
})

const { isLoading, result: actorsResponse } = useFetchWithMinLoading(() =>
  getMovieActors(movieId.value),
)


const actorsCast = computed(
  () => actorsResponse.value?.data?.cast || actorsResponse.value?.cast || [],
)
</script>

<template>
  <section class="mt-12 max-w-7xl mx-auto px-4">
    <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
      <span>Cast</span>
    </h2>

    <div v-if="isLoading" class="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
      <div v-for="i in 6" :key="i" class="flex-shrink-0 w-32 animate-pulse">
        <div class="w-28 h-28 mx-auto rounded-full bg-slate-700/60 mb-3"></div>
        <div class="h-4 bg-slate-700/60 rounded w-5/6 mx-auto mb-2"></div>
        <div class="h-3 bg-slate-700/40 rounded w-2/3 mx-auto"></div>
      </div>
    </div>

    <div
      v-else-if="actorsCast.length > 0"
      class="flex gap-5 flex-wrap"
    >
      <div
        v-for="actor in actorsCast"
        :key="actor.id"
        class="flex-shrink-0 w-32 text-center snap-start group"
      >
        <div
          class="w-28 h-28 mx-auto rounded-full overflow-hidden border border-white/10 bg-slate-800 shadow-lg mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-500/50"
        >
          <img
            :src="`${imageBasePath}${actor.profile_path}`"
            :alt="actor.name"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <p
          class="text-sm font-semibold text-gray-100 truncate px-1 group-hover:text-violet-400 transition-colors"
        >
          {{ actor.name }}
        </p>

        <p class="text-xs text-gray-400 truncate px-1 mt-0.5" :title="actor.character">
          {{ actor.character }}
        </p>
      </div>
    </div>

    <div v-else class="text-gray-400 text-sm py-4">
      No cast information available for this movie.
    </div>
  </section>
</template>
