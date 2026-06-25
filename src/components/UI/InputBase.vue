<script setup lang="ts">
import { ref, watch, type Component } from 'vue'
import EyeIcon from '@/assets/icons/eye.svg?component'
import EyeClose from '@/assets/icons/closeEye.svg?component'
import { useField } from 'vee-validate'

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

const inputValue = ref(props.modelValue)
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
const newRightIcon = ref<string>(props.isPassword ? 'eye-close' : 'default')
const newType = ref(props.type)

if (props.isPassword) {
  clickable.value = true
}

function togglePassword() {
  if (newType.value === 'password') {
    newType.value = 'text'
    newRightIcon.value = 'eye-open'
  } else {
    newType.value = 'password'
    newRightIcon.value = 'eye-close'
  }
}

const { value, errorMessage, meta } = useField(() => props.name)

const defaultInputClass = "peer relative z-10 w-full h-16 pt-7 pr-4 pb-3 pl-14 text-base leading-5 text-gray-400 bg-black/10 border-2 border-gray-800 rounded-xl outline-none appearance-none transition-colors placeholder-transparent focus:border-blue-500 focus:placeholder-gray-400/40 group-[.has-error]:border-red-400 group-[.has-error]:focus:border-red-400 group-[.has-success]:border-green-400 group-[.has-success]:focus:border-green-400"

</script>

<template>
  <div class="relative mb-2 rounded-xl group" :class="state">
    <div
      v-if="leftIcon"
      class="absolute inline-block h-6 left-4 top-4.5 z-20 [&>svg]:stroke-gray-600 group-[.has-error]:[&>svg]:stroke-red-400 group-[.has-success]:[&>svg]:stroke-green-400"
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
      :class="defaultInputClass"

    />

    <label
      :for="name"
      class="absolute z-20 left-14 top-6 text-sm leading-4 text-gray-600 cursor-text origin-top-left transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] peer-focus:-translate-y-3 peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-gray-600 group-[.has-error]:text-red-400 group-[.has-error]:peer-focus:text-red-400 group-[.has-success]:text-green-400 group-[.has-success]:peer-focus:text-green-400"
    >
      {{ label }}
    </label>

    <div
      v-if="rightIcon || isPassword"
      class="absolute inline-block h-6 right-4 top-4.5 z-20 [&>svg]:stroke-gray-600 group-[.has-error]:[&>svg]:stroke-red-400 group-[.has-success]:[&>svg]:stroke-green-400"
      :class="{ 'cursor-pointer': clickable }"
    >
      <template v-if="isPassword">
        <div @click="togglePassword" class="flex items-center justify-center">
          <EyeIcon v-if="newRightIcon === 'eye-open'" />
          <EyeClose v-else />
        </div>
      </template>

      <template v-else-if="rightIcon">
        <component :is="rightIcon" />
      </template>
    </div>
  </div>
</template>
