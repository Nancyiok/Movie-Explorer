<script setup lang="ts">
import { computed } from 'vue'
import { publicRoutes, authRoutes } from '@/router/routes'
import { FORGOT_PATH } from '@/constants/navigationPath.ts'
import { RouterLink } from 'vue-router'
import LogoNav from '@/components/UI/HeaderNav/LogoNav.vue'

const headerPublicRoutes = computed(() => {
  return publicRoutes.filter((route) => route.path !== FORGOT_PATH)
})

const headerRoutes = computed(() => {
  return true ? authRoutes : headerPublicRoutes
})
</script>
<template>
  <header class="flex items-center justify-between p-4">
    <LogoNav />
    <ul class="flex gap-4">
      <li v-for="route in headerRoutes" :key="route.name" class="py-3 px-4 text-gray-200 text-[16px] font-semibold">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </header>
</template>
