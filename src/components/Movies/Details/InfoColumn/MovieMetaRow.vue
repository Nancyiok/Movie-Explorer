<script setup lang="ts">
import UppercaseTitle from '@/components/UI/UppercaseTitle.vue'

interface Props {
  title: string
  value: string | number
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-0.5">
    <UppercaseTitle :title="title" />
    <span class="text-white font-medium">{{ value || 'Unknown' }}</span>
  </div>
</template>
