<script setup lang="ts">
import { computed } from 'vue'
import { publicRoutes, authRoutes } from '@/router/routes'
import { FORGOT_PATH } from '@/constants/navigationPath.ts'
import { RouterLink } from 'vue-router'
import BurgerMenu from '@/components/UI/BurgerMenu.vue'
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
    <ul class="gap-4 hidden md:flex">
      <li
        v-for="route in headerRoutes"
        :key="route.name"
        class="py-3 px-4 text-gray-200 text-[16px] font-semibold"
      >
        <RouterLink :to="route.path" class="hover:text-violet-400">{{ route.name }}</RouterLink>
      </li>
    </ul>
    <BurgerMenu :routes="headerRoutes" />
  </header>
</template>
