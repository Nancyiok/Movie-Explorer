<script setup lang="ts">
import { ref } from 'vue'
import DrawerMenu from '@/components/UI/Drawer/DrawerMenu.vue'
const isMenuOpen = ref(false)

defineProps(['routes'])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="bg-gray-950 p-1 rounded-[8px] lg:hidden">
    <button @click="toggleMenu" value="hamburger" class="flex flex-col justify-around h-8 w-8 p-1">
      <span v-for="i in 3" :key="i" class="h-[2px] bg-gray-400 w-full"></span>
    </button>

    <DrawerMenu :routes="routes" :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
  </div>
</template>

<style scoped>
@keyframes itemanim {
  from {
    scale: 0%;
  }

  to {
    scale: 100%;
  }
}

.item-animation {
  animation-name: itemanim;
}

.item-animation:nth-child(4) {
  animation-duration: 0.8s;
}

.item-animation:nth-child(2) {
  animation-duration: 0.4s;
}

.item-animation:nth-child(3) {
  animation-duration: 1.2s;
}
</style>
