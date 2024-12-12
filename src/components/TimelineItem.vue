<script setup>
import { ref, inject } from 'vue';
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './UI/BaseSelect.vue'
import TimelineStopWatch from '@/components/TimelineStopWatch.vue';
import { NULLABLE_ACTIVITY } from '@/constants';
import {
  isTimelineItemValid,
  isActivityValid,
  isHourValid,
} from '@/validators'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid,
})

const activities = inject('activities')
const activitySelectOptions = inject('activitySelectOptions')

function selecteActivity(id) {
  emit('selectActivity', findActivityById(id))
}
function findActivityById(id) {
  return activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
const isCurrentHour = ref(props.timelineItem.hour === new Date().getHours())
</script>

<template>
  <li
    class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10"
    :class="{ 'border-green-400/50': isCurrentHour }"
  >
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      placeholder="Rest"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      @select="selecteActivity"
    />
    <TimelineStopWatch :timeline-item="timelineItem" />
  </li>
</template>
