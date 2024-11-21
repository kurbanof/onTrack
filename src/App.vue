<script setup>
import { ref } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

import { normalizePageHash,generateTimelineItems } from './functions'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

// function normalizePageHash() срабатывает один раз при загрузке или перезагрузке страницы
const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template  >

  <TheHeader class="mb-7"
  @go-to-progress="goTo(PAGE_PROGRESS)"
  @go-to-timeline="goTo(PAGE_TIMELINE)"
  />

  <main class="flex flex-grow flex-col mb-7 " >
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)"  />
</template>

