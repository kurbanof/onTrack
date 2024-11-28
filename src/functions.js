import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
import { isPageValid } from '@/validators'

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

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((label, value) => ({ label, value }))
}
