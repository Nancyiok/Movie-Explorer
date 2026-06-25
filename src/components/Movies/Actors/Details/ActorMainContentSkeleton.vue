<script setup lang="ts">
import ContentSkeleton from '@/components/UI/ContentSkeleton.vue'
</script>

<template>
  <div class="md:col-span-2">
    <ContentSkeleton class="h-12 w-2/3 rounded-xl mb-8" />

    <div class="mb-10">
      <ContentSkeleton class="h-7 w-32 rounded-md mb-4" />
      <div class="space-y-3">
        <ContentSkeleton class="h-4 w-full" />
        <ContentSkeleton class="h-4 w-full" />
        <ContentSkeleton class="h-4 w-5/6" />
        <ContentSkeleton class="h-4 w-2/3" />
      </div>
    </div>

    <div>
      <ContentSkeleton class="h-7 w-40 rounded-md mb-6" />
    </div>
  </div>
</template>
