<script setup>
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './UI/BaseSelect.vue'
import TimelineStopWatch from '@/components/TimelineStopWatch.vue';
import { NULLABLE_ACTIVITY } from '@/constants';
import {
  isTimelineItemValid,
  isActivityValid,
  validateSelectOptions,
  validateActivities,
} from '@/validators'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid
})
function selecteActivity(id) {
  emit('selectActivity', findActivityById(id))
}
function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      @select="selecteActivity"
    />
    <TimelineStopWatch :seconds="timelineItem.activitySeconds"/>
  </li>
</template>
