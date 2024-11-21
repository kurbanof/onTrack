<script setup>
import TimelineItem from '../components/TimelineItem.vue'
defineProps(['timelineItems'])
</script>
<template>
  <div>
    <ul>
      <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timeline-item="timelineItem"/>
    </ul>
  </div>
</template>
