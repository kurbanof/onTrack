import { BUTTON_TYPES, NAV_ITEMS, HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
import { ICONS } from '@/icons'

export function isPageValid(page) {
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isIconValid(icon) {
  return Object.keys(ICONS).includes(icon)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
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

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}
export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
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
