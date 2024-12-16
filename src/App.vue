<script setup>
import { ref, provide, readonly } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import { currentPage, timelineRef } from '@/router'

import {
  generateTimelineItems,
  generatePeriodSelectOptions
} from './functions'

import * as keys from '@/keys'
import {
  setActivitySecondsToComplete,
  activitySelectOptions,
  createActivity,
  deleteActivity,
  activities
} from '@/activities'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

// function normalizePageHash() срабатывает один раз при загрузке или перезагрузке страницы


const timelineItems = ref(generateTimelineItems(activities.value))

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function updateTimelineItemActivitySeconds(timelineItem, seconds) {
  timelineItem.activitySeconds += seconds
}


provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds) // inject ininto TimelineStopWatch
provide(keys.createActivityKey, createActivity) // Inject into TheActivityForm
provide(keys.deleteActivityKey, deleteActivity) // Inject into ActivityItem
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete) // inject ininto ActivityItem
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions())) // inject ininto ActivityItem
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity) // inject ininto TimelineItem
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions)) // inject ininto TimelineItem
provide(keys.timelineItemsKey, readonly(timelineItems)) // inject ininto ActivitySecondsToComplete

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
