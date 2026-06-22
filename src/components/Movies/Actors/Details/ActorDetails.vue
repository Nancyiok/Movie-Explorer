<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getActorDetails } from '@/services/actorsService.ts'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import ActorSidebarInfo from '@/components/Movies/Actors/Details/ActorSidebarInfo.vue'
import ActorMainContent from '@/components/Movies/Actors/Details/ActorMainContent.vue'
import BackButton from '@/components/UI/BackButton.vue'

const route = useRoute()
const actorId = computed(() => route.params.id)

const {
  isLoading,
  result: actor,
  notFound,
} = useFetchWithMinLoading(() => getActorDetails(actorId?.value))

const actorMovies = computed(() => actor.value?.movie_credits?.cast || [])

</script>

<template>
  <div v-if="isLoading" class="text-center py-20 text-xl text-violet-400 animate-pulse">
    Loading actor profile...
  </div>

  <BackButton />
  <div v-if="actor" class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <ActorSidebarInfo
      :profilePath="actor.profile_path"
      :name="actor.name"
      :placeOfBirth="actor.place_of_birth"
      :birthday="actor.birthday"
      :deathday="actor.deathday"
    />

    <ActorMainContent :name="actor.name" :biography="actor.biography" :movies="actorMovies" />
  </div>

  <div v-if="notFound || !actorId" class="text-center py-20 text-gray-500">
    Actor profile not found.
  </div>
</template>
