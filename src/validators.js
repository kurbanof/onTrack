import { BUTTON_TYPES, NAV_ITEMS, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}
export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}
export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGT_HOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}
function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

// export function findMatchingOption(options, match) {
//   const item = options.find((item) => item.value === match)
//   return item?.value
// }

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}
export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}
export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumber(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}
function isString(value) {
  return typeof value === 'string'
}
export function isNumber(value) {
  return typeof value === 'number'
}

export function isNull(value) {
  return value === null
}
