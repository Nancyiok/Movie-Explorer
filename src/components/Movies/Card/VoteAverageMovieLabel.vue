<script setup lang="ts">
import StarIcon from '@/assets/icons/star.svg?component'
import { formatNumberBasedOnLocale } from '@/utils/formatNumberBasedOnLocale.js'

interface Props {
  voteAverage: number
  voteCount?: number
}
defineProps<Props>()
</script>
<template>
  <div class="text-yellow-500 flex gap-1 items-center p-2 bg-black/65 w-fit rounded-[8px] text-4">
    <StarIcon class="w-4 h-4" />
    {{ voteAverage.toFixed(1) }}
    <span v-if="voteCount" class="text-xs text-gray-50 font-normal">
      ({{ formatNumberBasedOnLocale(voteCount) }} votes)
    </span>
  </div>
</template>
