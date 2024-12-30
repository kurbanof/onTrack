import { createApp } from 'vue'
import App from './App.vue'
import { loadState, saveState } from './storage'
import { findActivTimelineItem, startTimelineItemTimer } from './timeline-items'

import './assets/main.css'

loadState()

const activeTimelineItem = findActivTimelineItem()

if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem)
}
document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

createApp(App).mount('#app')
