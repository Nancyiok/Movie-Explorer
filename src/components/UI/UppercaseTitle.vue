<script setup lang="ts">
interface Props {
  title: string
  titleClass?: string
}

withDefaults(defineProps<Props>(), {
  titleClass: 'text-xs',
})
</script>

<template>
  <span :class="['font-semibold uppercase text-gray-500', titleClass]">
    {{ title }}
  </span>
</template>
