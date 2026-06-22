<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div class="w-full max-w-2xl p-6 md:p-10 rounded-[24px] backdrop-blur bg-transparent space-y-6">
    <ContentSkeleton skeletonStyles="h-8 bg-slate-800 rounded-lg w-3/4" />

    <div class="flex items-center gap-3">
      <ContentSkeleton skeletonStyles="h-10 bg-slate-800 rounded-md w-35" />
    </div>

    <div class="space-y-3">
      <ContentSkeleton
        v-for="i in 4"
        :key="i"
        skeletonStyles="h-4 bg-slate-800 rounded-md w-full"
      />
    </div>

    <div class="space-y-5 pt-6 border-t border-white/10">
      <ContentSkeleton skeletonStyles="h-[42px] bg-slate-800 rounded-md w-25" />
      <ContentSkeleton skeletonStyles="h-[42px] bg-slate-800 rounded-md w-20" />
      <ContentSkeleton skeletonStyles="h-[42px] bg-slate-800 rounded-md w-25" />
      <ContentSkeleton skeletonStyles="h-[42px] bg-slate-800 rounded-md w-25" />
    </div>
  </div>
</template>
