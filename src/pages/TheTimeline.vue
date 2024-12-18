<script setup>
import {  watchPostEffect, nextTick } from 'vue';
import { PAGE_TIMELINE } from '@/constants';
import { currentPage } from '@/router';
import TimelineItem from '@/components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToHour, scrollToCurrentHour } from '@/timeline-items';

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToCurrentHour(false)
  }
})

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
