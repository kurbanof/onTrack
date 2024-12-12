<script setup>
import { ref } from 'vue';
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './UI/BaseSelect.vue'
import TimelineStopWatch from '@/components/TimelineStopWatch.vue';
import { NULLABLE_ACTIVITY } from '@/constants';
import {
  isTimelineItemValid,
  isActivityValid,
  validateSelectOptions,
  validateActivities,
  isHourValid,
  isNumber,
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
  selectActivity: isActivityValid,
  scrollToHour: isHourValid,
  updateActivitySeconds: isNumber
})
function selecteActivity(id) {
  emit('selectActivity', findActivityById(id))
}
function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
const isCurrentHour = ref(props.timelineItem.hour === new Date().getHours())
</script>

<template>
  <li
    class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10"
    :class="{ 'border-green-400/50': isCurrentHour }"
  >
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)"/>
    <BaseSelect
      placeholder="Rest"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      @select="selecteActivity"
    />
    <TimelineStopWatch
      :timeline-item-activity-seconds="timelineItem.activitySeconds"
      :hour="timelineItem.hour"
      @update-seconds="emit('updateActivitySeconds', $event)"
    />
  </li>
</template>
