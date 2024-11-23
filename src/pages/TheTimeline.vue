<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import {validateTimelineItems } from '@/validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
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
