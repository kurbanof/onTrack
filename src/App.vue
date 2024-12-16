<script setup>
import { provide, readonly } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import { currentPage, timelineRef } from '@/router'

import {
  generatePeriodSelectOptions
} from './functions'

import * as keys from '@/keys'

import {
  activities,
  createActivity,
  deleteActivity,
  activitySelectOptions,
  setActivitySecondsToComplete
} from '@/activities'

import {
  timelineItems,
  setTimelineItemActivity,
  updateTimelineItemActivitySeconds,
  resetTimelineActivities
} from '@/timeline-items'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds) // inject into TimelineStopWatch
provide(keys.createActivityKey, createActivity) // Inject into TheActivityForm
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineActivities(activity)
  deleteActivity(activity)
}) // Inject into ActivityItem
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete) // inject ininto ActivityItem
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions())) // inject into ActivityItem
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity) // inject into TimelineItem
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions)) // inject into TimelineItem
provide(keys.timelineItemsKey, readonly(timelineItems)) // inject into ActivitySecondsToComplete

</script>

<template>
  <TheHeader class="mb-7" />

  <main class="flex grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
