<script setup>
import { onActivated } from 'vue';
import TimelineItem from '@/components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToHour, scrollToCurrentHour } from '@/timeline-items';

onActivated(scrollToCurrentHour)
</script>

<template>
  <div>
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
