<script setup>
import { isActivityValid, validateTimelineItems } from '@/validators';
import { formatSeconds, getTotalActivitySeconds } from '@/functions';
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

const seconds = formatSeconds(
  getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
)

</script>
<template>
  <div class="flex items-center bg-purple-100 rounded px-2 text-xl text-purple-600">
    {{ seconds }}</div>
</template>
