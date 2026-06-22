<script setup lang="ts">
import { getImageUrl } from '@/utils/getImageUrl.ts'
import UppercaseTitle from '@/components/UI/UppercaseTitle.vue'
import LazyImage from '@/components/UI/LazyImage.vue'

defineProps<{
  profilePath: string | null
  name: string
  placeOfBirth?: string | null
  birthday?: string | null
  deathday?: string | null
}>()
</script>

<template>
  <div class="flex flex-col items-center md:items-start">
    <LazyImage
      :src="getImageUrl(profilePath, 'h632')"
      imageClass="w-full object-cover object-top rounded-[20px]"
      :alt="`${name} photo`"
    />

    <div class="space-y-3 text-gray-300 w-full mt-4">
      <div>
        <UppercaseTitle title="Place of Birth" titleClass="text-[16px]" />
        <p>{{ placeOfBirth || 'Not available' }}</p>
      </div>
      <div>
        <UppercaseTitle title="Birthday" titleClass="text-[16px]" />
        <p>{{ birthday || 'Not available' }}</p>
      </div>
      <div v-if="deathday">
        <UppercaseTitle title="Deathday" titleClass="text-red-400" />
        <p>{{ deathday }}</p>
      </div>
    </div>
  </div>
</template>
