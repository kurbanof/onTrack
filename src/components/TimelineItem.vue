<script setup>
import BaseSelect from './UI/BaseSelect.vue'
import {
  isActivityValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators'
import TimelineHour from './TimelineHour.vue'

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
})
function selectedActivity(id) {
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id),
  )
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectedActivity"
    />
  </li>
</template>
