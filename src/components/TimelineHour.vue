<script setup>
import { currentHour } from '@/functions'
import { isHourValid } from '@/validators'
const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid(),
  },
})

const classes = [
  ' absolute -top-4 left-1/2 block -translate-x-1/2 rounded px-2 text-lg border',
  props.hour === currentHour()
    ? 'bg-green-500 text-white font-black'
    : 'text-grey-500 bg-gray-100  ',
]

const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>
<template>
  <a href="#" :class="classes">{{ formattedHour }}</a>
</template>
