import { createApp } from 'vue'
import App from './App.vue'
import { loadState, saveState } from './storage'

import './assets/main.css'

loadState()

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

createApp(App).mount('#app')
