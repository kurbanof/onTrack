<script setup>
import { ref } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import { normalizePageHash, generateTimelineItems } from './functions'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

// function normalizePageHash() срабатывает один раз при загрузке или перезагрузке страницы
const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Training']

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader class="mb-7" @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
