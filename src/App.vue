<script setup>
import { computed, ref, provide } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
} from './functions'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds)

// function normalizePageHash() срабатывает один раз при загрузке или перезагрузке страницы
const currentPage = ref(normalizePageHash())


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
const timeline = ref()
function goTo(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timeline.value.scrollToHour()
  }
  if (page !== PAGE_TIMELINE && currentPage.value !== page) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
}
function setTimelineItemActivity(timelineItem, activity) {
  timelineItem.activityId = activity.id
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
function updateTimelineItemActivitySeconds(timelineItem, seconds) {
  timelineItem.activitySeconds += seconds
}

</script>

<template>
  <TheHeader
    class="mb-7"
    @navigate="goTo($event)"
  />

  <main class="flex grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      :currentPage="currentPage"
      ref="timeline"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      :timeline-items="timelineItems"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav
    :current-page="currentPage"
    @navigate="goTo($event)"
  />
</template>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
