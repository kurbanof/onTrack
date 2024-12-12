<script setup>
import { ref, inject } from 'vue';
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './UI/BaseSelect.vue'
import TimelineStopWatch from '@/components/TimelineStopWatch.vue';
import {
  isTimelineItemValid,
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
  scrollToHour: isHourValid,
})
const setTimelineItemActivity = inject('setTimelineItemActivity')
const activitySelectOptions = inject('activitySelectOptions')

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
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopWatch :timeline-item="timelineItem" />
  </li>
</template>
