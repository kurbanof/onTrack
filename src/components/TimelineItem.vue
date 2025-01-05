<script setup>
import { computed } from 'vue'
import { activitySelectOptions } from '@/activities'
import { updateTimelineItem } from '@/timeline-items'
import { now } from '@/time'
import { isTimelineItemValid } from '@/validators'
import TimelineHour from '@/components/TimelineHour.vue'
import TimelineStopWatch from '@/components/TimelineStopWatch.vue'
import BaseSelect from './UI/BaseSelect.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const isCurrentHour = computed(() => props.timelineItem.hour === now.value.getHours())
</script>

<template>
  <li
    class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10"
    :class="{ 'border-green-300/50': isCurrentHour }"
  >
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopWatch :timeline-item="timelineItem" />
  </li>
</template>
