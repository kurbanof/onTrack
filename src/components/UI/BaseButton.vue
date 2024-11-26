<script>
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER } from '@/constants'
const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200 ',
  [BUTTON_TYPE_DANGER]: 'bg-red-300 enabled:hover:bg-red-400 ',
}
</script>

<script setup>
import { isButtonTypeValid } from '@/validators'

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_NEUTRAL,
    validator: isButtonTypeValid,
  },
})
</script>
<template>
  <button
    :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
