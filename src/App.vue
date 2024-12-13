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
const timeline = ref() // это ссылка соединяющая timeline с компонентом TheTimeline, который в свою очередь поедоставляет доступ к функции scrollToHour() посредством макроса defineExpose
function goTo(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timeline.value.scrollToHour()
  }
  if (page !== PAGE_TIMELINE && currentPage.value !== page) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
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


provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds) // inject in TimelineStopWatch
provide('setActivitySecondsToComplete', setActivitySecondsToComplete) // inject in ActivityItem
provide('setTimelineItemActivity', setTimelineItemActivity) // inject in TimelineItem
provide('activitySelectOptions', activitySelectOptions) // activitySelectOptions in TimelineItem
provide('timelineItems', timelineItems) // inject in ActivitySecondsToComplete

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
      :currentPage="currentPage"
      ref="timeline"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
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
