<script setup lang="ts">
defineProps(['skeletonStyles'])
</script>

<template>
  <div class="skeleton" :class="skeletonStyles"></div>
</template>
