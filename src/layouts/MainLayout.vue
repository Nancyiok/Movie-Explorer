<script setup lang="ts">
import HeaderNav from '@/components/UI/HeaderNav/HeaderNav.vue'
</script>

<template>
  <div class="relative">
    <HeaderNav />
    <div class="lg:px-30 px-4">
      <slot />
    </div>
  </div>
</template>
