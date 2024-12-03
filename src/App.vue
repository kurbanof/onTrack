<script setup>
import { computed, ref } from 'vue'

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

const timelineItems = generateTimelineItems()

const activities = ref(generateActivities())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
// const activitySelectOptions = generateActivitySelectOptions(activities.value)

function createActivity(activity) {
  activities.value.push(activity)
}
function deleteActivity(activity) {
  console.log(activity)
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader class="mb-7" @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
