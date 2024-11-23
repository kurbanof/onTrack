import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGT_HOUR && hour < HOURS_IN_DAY
}

