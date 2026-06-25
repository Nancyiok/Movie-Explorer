<script setup lang="ts">
defineProps(['skeletonStyles'])
</script>

<template>
  <div class="skeleton bg-slate-700" :class="skeletonStyles"></div>
</template>
