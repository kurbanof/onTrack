import {
  MILLISECONDS_IN_SECONDS,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  HUNDRED_PERCENT,
} from './constants'
import { isNull } from '@/validators'

export function formatSecondsWithSign(seconds) {
  return `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`
}
export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function getProgressColorClass(percentage) {
  if (percentage < LOW_PERCENT) return 'bg-red-300'
  if (percentage < MEDIUM_PERCENT) return 'bg-orange-300'
  if (percentage < HUNDRED_PERCENT) return 'bg-yellow-300'
  return 'bg-green-300'
}
export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(3)
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480,
  ]
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hour = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hour}:${minutes}`
}
