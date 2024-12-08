<script setup>
import BaseSelect from './UI/BaseSelect.vue'
import {
  isTimelineItemValid,
  isActivityValid,
  validateSelectOptions,
  validateActivities,
  isNull,
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
  selectActivity(activity) {
    return isNull(activity) || isActivityValid(activity)
  }
})
function selecteActivity(id) {
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id) || null,
  )
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
  </li>
</template>
