import { computed, ref } from 'vue'
import {
  MILLISECONDS_IN_SECONDS,
  SECONDS_IN_HOUR,
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
} from '@/constants'

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECONDS)

export const secondsSinceMidnightInPercentage = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY,
)
export function today() {
  return new Date()
}

export function tomorrow() {
  const tomorrow = today()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function toSeconds(milliseconds) {
  return Math.round(milliseconds / MILLISECONDS_IN_SECONDS)
}

export function endofHour(date) {
  // const endOfHour = date
  const endOfHour = new Date(date)
  endOfHour.setTime(endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECONDS)
  endOfHour.setMinutes(0, 0, 0)
  return endOfHour
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export const now = ref(today())
// export const now = ref(new Date())

export function startCurrentDateTimer() {
  setInterval(() => (now.value = today()), MILLISECONDS_IN_SECONDS)
}
