<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div class="relative animate-pulse select-none pointer-events-none">
    <div class="absolute top-4 left-4 z-10 w-10 h-10 bg-slate-700/50 rounded-full"></div>
    <ContentSkeleton skeletonStyles="w-full h-120 bg-slate-800 rounded-[40px]" />
    <div
      class="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-blue-900/20 rounded-[40px]"
    ></div>
    <div
      class="absolute lg:bottom-[-60px] bottom-[-40px] lg:left-[10%] left-[5%] bg-black/65 lg:p-10 p-6 rounded-[24px] backdrop-blur md:w-[45%] w-[90%] shadow-2xl border border-white/5"
    >
      <ContentSkeleton skeletonStyles="h-8 md:h-9 bg-slate-700 rounded-lg w-2/3 mb-4" />

      <div class="flex flex-wrap gap-2 items-center">
        <ContentSkeleton skeletonStyles="h-3 bg-slate-700/60 rounded w-12 mr-2" />

        <ContentSkeleton skeletonStyles="h-6 bg-slate-700 rounded-full w-16" />
        <ContentSkeleton skeletonStyles="h-6 bg-slate-700 rounded-full w-20" />
        <ContentSkeleton skeletonStyles="h-6 bg-slate-700 rounded-full w-14" />
      </div>
    </div>
  </div>
</template>
