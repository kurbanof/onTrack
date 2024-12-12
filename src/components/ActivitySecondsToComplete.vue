<script setup>
import { isActivityValid, validateTimelineItems } from '@/validators';
import { formatSeconds, getTotalActivitySeconds } from '@/functions';
import { computed } from 'vue';
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  },
})

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(() => secondsDiff.value >= 0 ? '+' : '-')
const secondsDiff = computed(() => getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
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
