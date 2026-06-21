<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div
    class="bg-slate-800/80 p-2 rounded-[12px] w-full max-w-sm relative animate-pulse select-none pointer-events-none"
  >
    <ContentSkeleton
      skeletonStyles="absolute left-4 top-[16px] z-10 w-[58px] h-10 bg-slate-700 rounded-[6px]"
    />

    <div class="overflow-hidden rounded-[8px] aspect-[2/3] w-full">
      <ContentSkeleton skeletonStyles="w-full h-full bg-slate-700" />
    </div>

    <div class="p-2">
      <ContentSkeleton skeletonStyles="h-5 bg-slate-700 rounded w-3/4 my-1" />
    </div>
  </div>
</template>
