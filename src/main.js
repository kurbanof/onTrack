import { createApp } from 'vue'
import App from './App.vue'
import { syncState } from './storage'
import { activeTimelineItem } from './timeline-items'
import { startTimelineItemTimer } from './timeline-item-timer'
import { startCurrentDateTimer } from './time'

import './assets/main.css'

syncState()

startCurrentDateTimer()

if (activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value)
}
document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
