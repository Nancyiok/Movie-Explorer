<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  imageClass: string
}

defineProps<Props>()

const isImgLoaded = ref(false)
</script>

<template>
  <img
    v-if="src"
    :src="src"
    loading="lazy"
    :class="[imageClass, isImgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95']"
    :alt="alt"
    @load="isImgLoaded = true"
  />
  <slot v-else/>
</template>
