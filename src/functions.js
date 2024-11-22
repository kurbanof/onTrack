import { NAV_ITEMS, PAGE_TIMELINE, HOURS_IN_DAY } from './constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if (Object.keys(NAV_ITEMS).includes(hash)) {
    window.location.hash = hash
    return hash
  } else {
    console.log(hash)
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
