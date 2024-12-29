import { computed, ref } from 'vue';
import {
  MILLISECONDS_IN_SECONDS,
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE,
} from '@/constants';

const date = new Date()
date.setHours(0, 0)

export const now = ref(date)
// export const now = ref(new Date())

export const secondsSinceMidnightInPercentage = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

let timer = null

export function startTimer() {
  now.value = date

  timer = setInterval(() => {
    now.value = new Date(now.value.getTime() + SECONDS_IN_MINUTE * MILLISECONDS_IN_SECONDS)
  }, MILLISECONDS_IN_SECONDS)
}

export function stopTimer() {
  clearInterval(timer)
}


const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECONDS)


