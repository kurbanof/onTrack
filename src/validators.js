import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}
export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGT_HOUR, HOURS_IN_DAY - 1)
}
function isBetween(value, start, end) {
  return value >= start && value <= end
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}
function isString(value) {
  return typeof value === 'string'
}
function isNumber(value) {
  return typeof value === 'number'
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

function isUndefined(value) {
  return value === undefined
}
function isNull(value) {
  return value === null
}
