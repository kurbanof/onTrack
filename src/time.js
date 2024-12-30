import { computed, ref } from 'vue';
import {
  MILLISECONDS_IN_SECONDS,
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
} from '@/constants';

export function today() {
  const today = new Date()

  return today
}

export function tomorrow() {
  const tomorrow = today()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export const now = ref(today())
// export const now = ref(new Date())

export const secondsSinceMidnightInPercentage = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

let timer = null

export function startTimer() {
  now.value = today()

  timer = setInterval(() => {
    now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECONDS)
  }, MILLISECONDS_IN_SECONDS)
}

export function stopTimer() {
  clearInterval(timer)
}


const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECONDS)


