<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
    <div v-for="i in 6" :key="i" class="flex-shrink-0 w-32 animate-pulse">
      <ContentSkeleton skeletonStyles="w-28 h-28 mb-3" />
      <ContentSkeleton skeletonStyles="h-4 w-5/6" />
      <ContentSkeleton skeletonStyles="h-3 w-2/3" />
    </div>
  </div>
</template>

<style scoped></style>
