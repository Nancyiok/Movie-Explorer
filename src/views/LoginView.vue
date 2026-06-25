<script setup lang="ts">
import LoginImage from '@/assets/images/login.png'
import LazyImage from '@/components/UI/LazyImage.vue'
import LogInForm from '@/components/LoginForm/LogInForm.vue'
</script>

<template>
  <div class="flex flex-wrap justify-between items-center">
    <LazyImage :src="LoginImage" alt="login image" />
    <LogInForm />
  </div>
</template>

<style scoped></style>
