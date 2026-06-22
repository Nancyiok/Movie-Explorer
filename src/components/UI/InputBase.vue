<script setup lang="ts">
import { ref, watch, type Component } from 'vue'

interface InputProps {
  modelValue?: string
  type?: string
  name?: string
  isPassword?: boolean
  autocomplete?: string
  label?: string
  placeholder?: string
  required?: string | boolean
  leftIcon?: Component
  rightIcon?: Component
  hasFeedback?: boolean
  feedback?: string
  state?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: ' ',
  required: false,
  hasFeedback: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = ref(props.modelValue)
watch(
  () => props.modelValue,
  (val) => {
    value.value = val
  },
)

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const clickable = ref(false)
const newRightIcon = ref<string | Component | undefined>(props.rightIcon)
const newType = ref(props.type)

if (props.isPassword) {
  clickable.value = true
}

function togglePassword() {
  if (newType.value === 'password') {
    newType.value = 'text'
    newRightIcon.value = 'eye-close'
  } else {
    newType.value = 'password'
    newRightIcon.value = 'eye-open'
  }
}

</script>

<template>
  <div class="relative mb-2 rounded-xl group" :class="state">
    <div
      v-if="leftIcon"
      class="absolute inline-block h-6 left-4 top-[18px] z-20 [&>svg]:stroke-gray-600 group-[.has-error]:[&>svg]:stroke-red-400 group-[.has-success]:[&>svg]:stroke-green-400"
    >
      <component :is="leftIcon" />
    </div>

    <input
      :type="newType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      :value="modelValue"
      @input="onInput"
      class="peer relative z-10 w-full h-16 pt-7 pr-4 pb-3 pl-14 text-base leading-5 text-gray-400 bg-black/10 border-2 border-gray-800 rounded-xl outline-none appearance-none transition-colors placeholder-transparent focus:border-blue-500 focus:placeholder-gray-400/40 group-[.has-error]:border-red-400 group-[.has-error]:focus:border-red-400 group-[.has-success]:border-green-400 group-[.has-success]:focus:border-green-400"
    />

    <label
      :for="name"
      class="absolute z-20 left-14 top-6 text-sm leading-4 text-gray-600 cursor-text origin-top-left transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] peer-focus:-translate-y-3 peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-gray-600 group-[.has-error]:text-red-400 group-[.has-error]:peer-focus:text-red-400 group-[.has-success]:text-green-400 group-[.has-success]:peer-focus:text-green-400"
    >
      {{ label }}
    </label>

    <div
      v-if="rightIcon"
      class="absolute inline-block h-6 right-4 top-[18px] z-20 [&>svg]:stroke-gray-600 group-[.has-error]:[&>svg]:stroke-red-400 group-[.has-success]:[&>svg]:stroke-green-400"
      :class="{ 'cursor-pointer': clickable }"
    >
      <template v-if="isPassword">
        <component :is="newRightIcon" @click="togglePassword" />
      </template>
      <template v-else>
        <component :is="newRightIcon" />
      </template>
    </div>

    <div
      v-if="hasFeedback"
      class="h-6 mt-1 ml-4 text-gray-400 group-[.has-error]:text-red-400 group-[.has-success]:text-green-400"
    >
      <p class="m-0 text-sm">{{ feedback }}</p>
    </div>
  </div>
</template>
