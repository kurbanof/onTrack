<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { generateTimelineItems } from '../functions'
const timelineItems = generateTimelineItems()
</script>
<template>
  <div>
    <ul>
      <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timeline-item="timelineItem"/>
    </ul>
  </div>
</template>
