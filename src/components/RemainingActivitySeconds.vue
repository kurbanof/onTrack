<script setup>
import { computed } from 'vue'
import { timelineItems, calculateTrackedActivitySeconds } from '@/timeline-items'
import { formatSecondsWithSign } from '@/functions'
import { isActivityValid } from '@/validators'
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const remainingSeconds = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete,
)

const classes = computed(() => [
  'flex items-center border-4 rounded px-2 text-xl',
  remainingSeconds.value < 0 ? redColor : greenColor,
])
const redColor = 'border-red-300/50 bg-red-100 text-red-700'
const greenColor = ' border-green-300/50 bg-green-100 text-green-700'
</script>
<template>
  <div :class="classes">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
