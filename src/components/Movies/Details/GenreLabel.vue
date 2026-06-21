<script setup lang="ts">
defineProps(["genre"])
</script>

<template>
  <span
    class="bg-white/15 hover:bg-white/25 transition-colors text-xs md:text-sm
    px-3 py-1 rounded-full border border-white/10"
  >
    {{ genre.name }}
  </span>
</template>
