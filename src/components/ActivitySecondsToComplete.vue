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
const sign = computed(() =>  secondsDiff.value > 0 ? '-' : '+')
const secondsDiff = computed(() => getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
)
const colorClasses = computed(() => secondsDiff.value > 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600')

const classes = computed(() => `flex items-center bg-purple-100 rounded px-2 text-xl text-purple-600 ${colorClasses.value}`)

</script>
<template>
  <div :class="classes">
    {{ seconds }}</div>
</template>
