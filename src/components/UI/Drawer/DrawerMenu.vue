<script setup lang="ts">
defineProps(['isMenuOpen', 'toggleMenu', 'routes'])
import CloseButton from '@/components/UI/Drawer/CloseButton.vue'
</script>

<template>
  <div
    v-if="isMenuOpen"
    @click="toggleMenu"
    class="fixed inset-0 bg-black/50 z-40 transition-opacity"
  ></div>

  <aside
    :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    class="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 p-6 transform transition-transform duration-300 ease-in-out shadow-2xl"
  >
    <div class="flex gap-4 items-center justify-between mb-6">
      <h2 class="text-xl font-semibold leading-none">Menu</h2>
      <CloseButton :closeHandler="toggleMenu" />
    </div>
    <nav>
      <ul class="flex flex-col gap-4">
        <li v-for="route in routes" :key="route.name" class="font-normal">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped></style>
