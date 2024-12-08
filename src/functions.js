import {
  SECONDS_IN_HOUR,
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGT_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
} from './constants'
import { isPageValid, isNull } from '@/validators'

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
export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training', 'Working'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }))
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
    })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(3)
}

export function generatePeriodSelectOptions(periodsInMinutes) {
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hour = Math.floor(periodInMinutes / MINUTES_IN_HOUR).toString().padStart(2, 0)
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hour}:${minutes}`
}
