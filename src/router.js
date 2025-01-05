import { ref } from 'vue'
import { isPageValid } from '@/validators'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

export const currentPage = ref(normalizePageHash())

export const routs = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress,
}
export function normalizePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    window.location.hash = page
    return page
  } else {
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}
export function navigate(page) {
  document.body.scrollIntoView({ behavior: currentPage.value === page ? 'smooth' : 'instant' })
  currentPage.value = page
}
