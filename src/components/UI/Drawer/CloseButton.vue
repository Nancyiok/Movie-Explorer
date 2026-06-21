<script setup lang="ts">
import CrossIcon from '@/assets/icons/cross.svg'
defineProps(['closeHandler'])
</script>
<template>
  <button @click="closeHandler" class="bg-black p-2 rounded-[8px]">
    <CrossIcon class="w-4 h-4" />
  </button>
</template>
