<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid,
  isNull
} from '@/validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  },
})
const emit = defineEmits({
  setTimelineItemActivity({ timelineItem, activity }) {
    return [isTimelineItemValid(timelineItem),isNull(activity) || isActivityValid(activity)].every(Boolean)
  },
})
</script>
<template>
  <div>
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>
