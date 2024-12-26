import { computed, ref, watchEffect } from 'vue';
import {
  MILLISECONDS_IN_SECONDS,
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE
} from '@/constants';

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  )
}

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

export const secondsSinceMidnightInPercentage = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

watchEffect(() => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0
  }
})

let timer = null

export function startTimer() {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight()
  
  timer = setInterval(() => {
    secondsSinceMidnight.value += 5 * 60
  }, MILLISECONDS_IN_SECONDS)
}

export function stopTimer() {
  clearInterval(timer)
}


