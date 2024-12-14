<script setup>
import { computed, ref, provide } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import { currentPage, timelineRef } from '@/router'

import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions
} from './functions'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

// function normalizePageHash() срабатывает один раз при загрузке или перезагрузке страницы

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function createActivity(activity) {
  activities.value.push(activity)
}
function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}


function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
function updateTimelineItemActivitySeconds(timelineItem, seconds) {
  timelineItem.activitySeconds += seconds
}


provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds) // inject ininto TimelineStopWatch
provide('createActivity', createActivity) // Inject into TheActivityForm
provide('deleteActivity', deleteActivity) // Inject into ActivityItem
provide('setActivitySecondsToComplete', setActivitySecondsToComplete) // inject ininto ActivityItem
provide('periodSelectOptions', generatePeriodSelectOptions()) // inject ininto ActivityItem
provide('setTimelineItemActivity', setTimelineItemActivity) // inject ininto TimelineItem
provide('activitySelectOptions', activitySelectOptions) // inject ininto TimelineItem
provide('timelineItems', timelineItems) // inject ininto ActivitySecondsToComplete

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
