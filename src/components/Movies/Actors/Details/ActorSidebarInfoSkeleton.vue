<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div class="flex flex-col items-center md:items-start w-full">
    <ContentSkeleton class="w-full aspect-[2/3] rounded-[20px]" />

    <div class="space-y-4 w-full mt-5">
      <div class="space-y-2">
        <ContentSkeleton class="h-4 w-28 rounded-md" />
        <ContentSkeleton class="h-5 w-3/4" />
      </div>

      <div class="space-y-2">
        <ContentSkeleton class="h-4 w-20 rounded-md" />
        <ContentSkeleton class="h-5 w-1/2" />
      </div>
    </div>
  </div>
</template>
