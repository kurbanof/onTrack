import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}
export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGT_HOUR && hour < HOURS_IN_DAY
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}
function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}
