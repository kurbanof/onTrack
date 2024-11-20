import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS, HOUR_OF_DAY } from './constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if (Object.keys([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS]).includes(hash)) {
    return hash
  } else {
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}

export function generateTimelineItems() {
  const timelineItems = [];
  for (let hour = 0; hour < HOUR_OF_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
