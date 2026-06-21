<script setup lang="ts">
import { useMovieNavigation } from '@/composables/useToMainPageNavigation.ts'
import LogoIcon from '@/assets/icons/logo.svg?component'
const { goToMainPage } = useMovieNavigation()
</script>

<template>
  <button @click="goToMainPage" class="cursor-pointer">
    <LogoIcon class="h-10 w-10" />
  </button>
</template>

<style scoped></style>
