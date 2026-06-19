<script setup lang="ts">
import { ref } from 'vue'

const onClickHandler = (page: number) => {
  console.log(page)
}
defineProps(['total'])

const currentPage = ref(1)
</script>

<template>
  <vue-awesome-paginate
    :total-items="total"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    @click="onClickHandler"
  />
</template>

<style>
@reference "tailwindcss"

.pagination-container {
  display: flex;
  gap: 10px;
}

.paginate-buttons {
  @apply rounded-[30px] cursor-pointer bg-violet-300/50 py-2 px-4;
}

.paginate-buttons:hover {
  @apply bg-violet-300/80;
}

.active-page {
  @apply bg-blue-300/50;
}

.active-page:hover {
  @apply bg-blue-300/80;
}
</style>
