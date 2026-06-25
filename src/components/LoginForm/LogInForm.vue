<script setup lang="ts">
import InputBase from '@/components/UI/InputBase.vue'
import EmailIcon from '@/assets/icons/email.svg?component'
import PasswordIcon from '@/assets/icons/password.svg?component'
import ButtonBase from '@/components/UI/ButtonBase.vue'
</script>

<template>
  <div class="flex flex-col gap-4 justify-center flex-1">
    <h1>Login</h1>
    <InputBase label="Email" :leftIcon="EmailIcon" placeholder="e.g. user@example.com" />
    <InputBase
      type="password"
      name="password"
      label="Password"
      :isPassword="true"
      autocomplete="current-password"
      placeholder="********"
      :leftIcon="PasswordIcon"
      rightIcon="eye-open"
    />
    <ButtonBase text="Login" class="rounded-[8px] h-[64px]" />
  </div>
</template>

<style scoped></style>
