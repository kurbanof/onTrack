import { createApp } from 'vue'
import App from './App.vue'
import { loadState, saveState } from './storage'
import { activeTimelineItem } from './timeline-items'
import {  startTimelineItemTimer } from './timeline-item-timer'

import './assets/main.css'

loadState()


if (activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value)
}
document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

createApp(App).mount('#app')
