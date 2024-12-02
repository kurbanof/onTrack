import { SECONDS_IN_HOUR, PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
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

export function generateActivities() {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOUR,
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 1 * SECONDS_IN_HOUR,
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: 2 * SECONDS_IN_HOUR,
    },
  ]
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}

export function id() {
 return Date.now().toString(36) + Math.random().toString(36).substring(3)


}
