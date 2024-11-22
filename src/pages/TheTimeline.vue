<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { HOURS_IN_DAY } from '../constants'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator(timelineItems) {
      return timelineItems.every(
        (hour) => typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY,
      )
    },
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
      />
    </ul>
  </div>
</template>
