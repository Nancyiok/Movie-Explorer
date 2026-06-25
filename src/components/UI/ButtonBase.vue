<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type ButtonVariant = 'outline' | 'active' | 'glass'

type Props = {
  text: string
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  wide?: boolean
  square?: boolean
  circle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  wide: false,
  square: false,
  circle: false,
  color: 'primary',
})

const attrs = useAttrs()

const colorClasses: Record<ButtonColor, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

const buttonClasses = computed(() => {
  return [
    'btn',
    colorClasses[props.color],
    props.size ? `btn-${props.size}` : '',
    props.variant ? `btn-${props.variant}` : '',
    props.wide ? 'btn-wide' : '',
    props.square ? 'btn-square' : '',
    props.circle ? 'btn-circle' : '',
    attrs.class,
  ]
})
</script>

<template>
  <button :class="buttonClasses">
    {{ text }}
  </button>
</template>
