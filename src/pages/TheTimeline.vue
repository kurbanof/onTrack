<script setup>
import { onActivated, onDeactivated, onMounted } from 'vue';
import TimelineItem from '@/components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '@/timeline-items';
import { startTimer, stopTimer } from '@/time';
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue';

onMounted(() => setTimeout(() => scrollToCurrentHour(), 50))
onActivated(() => {
  scrollToCurrentHour()
  startTimer()
})
// onActivated(scrollToCurrentHour)
onDeactivated(stopTimer)
</script>

<template>
  <div class="relative">
    <TheTimelineIndicator/>
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
