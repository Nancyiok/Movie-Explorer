<script setup lang="ts">
import StarIcon from '@/assets/icons/star.svg?component'

interface Props {
  voteAverage: number
}
defineProps<Props>()
</script>
<template>
  <div class="text-yellow-500 flex gap-1 items-center p-2 bg-black/65 w-15 rounded-[8px] text-4">
    <StarIcon class="w-4 h-4 fill-current" />
    {{ voteAverage.toFixed(1) }}
  </div>
</template>
