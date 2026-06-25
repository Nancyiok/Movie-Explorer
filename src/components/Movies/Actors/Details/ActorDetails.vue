<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getActorDetails } from '@/services/actorsService.ts'
import { useFetchWithMinLoading } from '@/composables/useFetchWithMinLoading.ts'
import ActorSidebarInfo from '@/components/Movies/Actors/Details/ActorSidebarInfo.vue'
import ActorMainContent from '@/components/Movies/Actors/Details/ActorMainContent.vue'
import BackButton from '@/components/UI/BackButton.vue'
import ActorSidebarInfoSkeleton from '@/components/Movies/Actors/Details/ActorSidebarInfoSkeleton.vue'
import ActorMainContentSkeleton from '@/components/Movies/Actors/Details/ActorMainContentSkeleton.vue'

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
  <BackButton />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <ActorSidebarInfoSkeleton v-if="isLoading" />
    <ActorSidebarInfo
      v-if="actor"
      :profilePath="actor.profile_path"
      :name="actor.name"
      :placeOfBirth="actor.place_of_birth"
      :birthday="actor.birthday"
      :deathday="actor.deathday"
    />
    <ActorMainContentSkeleton v-if="isLoading" />
    <ActorMainContent
      v-if="actor"
      :name="actor.name"
      :biography="actor.biography"
      :movies="actorMovies"
    />
  </div>

  <div v-if="notFound" class="text-center py-20 text-gray-500">Actor profile not found.</div>
</template>
