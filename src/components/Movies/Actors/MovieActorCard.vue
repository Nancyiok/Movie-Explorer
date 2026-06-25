<script setup lang="ts">
import { getImageUrl } from '@/utils/getImageUrl.ts'
import LazyImage from '@/components/UI/LazyImage.vue'
import { ROUTES } from '@/constants/navigationPath.ts'
import { useRouter } from 'vue-router'

interface Actor {
  id: number
  name: string
  character: string
  profile_path: string | null
}

const router = useRouter()

const props = defineProps<{
  actor: Actor
}>()

const navigateToDetail = () => {
  router.push({
    path: `${ROUTES.ACTOR}/${props.actor.id}`,
    query: router.currentRoute.value.query,
  })
}
</script>

<template>
  <div
    class="flex-shrink-0 w-32 text-center snap-start group cursor-pointer"
    @click="navigateToDetail"
  >
    <div
      class="w-28 h-28 mx-auto rounded-full overflow-hidden border border-white/10 bg-slate-800 shadow-lg mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-500/50"
    >
      <LazyImage
        :src="getImageUrl(props.actor.profile_path, 'w185')"
        :alt="actor.name"
        imageClass="w-full h-full object-cover"
        placeholderClass="w-28 h-28"
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
</template>
