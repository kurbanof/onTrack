<script setup>
import { computed } from 'vue';
import { calculateTrackedActivitySeconds } from '@/timeline-items'
import { formatSeconds } from '@/functions';
import { isActivityValid } from '@/validators';
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(() => secondsDiff.value >= 0 ? '+' : '-')
const secondsDiff = computed(() => calculateTrackedActivitySeconds(props.activity) - props.activity.secondsToComplete
)

const colorClasses = computed(() => secondsDiff.value < 0 ? redColor : greenColor)

const redColor = 'border-red-300/50 bg-red-100 text-red-700'
const greenColor = ' border-green-300/50 bg-green-100 text-green-700'

const classes = computed(() => `flex items-center border-4 rounded px-2 text-xl ${colorClasses.value}`)

</script>
<template>
  <div :class="classes">
    {{ seconds }}</div>
</template>
