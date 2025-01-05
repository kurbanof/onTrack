<script>
import {
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
} from '@/constants'
const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-200 enabled:hover:bg-gray-300 ',
  [BUTTON_TYPE_PRIMARY]: 'bg-blue-200 enabled:hover:bg-blue-300 ',
  [BUTTON_TYPE_DANGER]: 'bg-red-300 enabled:hover:bg-red-400 ',
  [BUTTON_TYPE_WARNING]: 'bg-yellow-300 enabled:hover:bg-yellow-400 ',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-300 enabled:hover:bg-green-400 ',
}
</script>

<script setup>
import { isButtonTypeValid } from '@/validators'

const props = defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_NEUTRAL,
    validator: isButtonTypeValid,
  },
})
const classes = [
  'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type],
]
</script>
<template>
  <button :class="classes">
    <slot />
  </button>
</template>
