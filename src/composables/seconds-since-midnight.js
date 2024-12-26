import { computed, onActivated, onDeactivated, ref, watchEffect } from 'vue';
import { MILLISECONDS_IN_SECONDS, HUNDRED_PERCENT, SECONDS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '@/constants';

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  )
}

export function useSecondsSinceMidnight() {
  
  const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

  const secondsSinceMidnightInPercentage = computed(
    () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
  )

  watchEffect(() => {
    if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
      secondsSinceMidnight.value = 0
    }
  })

  let timer = null

  onActivated(() => {
    secondsSinceMidnight.value = calculateSecondsSinceMidnight()
    timer = setInterval(() => {
      secondsSinceMidnight.value += 5 * 60
    }, MILLISECONDS_IN_SECONDS)
  })

  onDeactivated(() => clearInterval(timer))

  return {
    secondsSinceMidnightInPercentage
  }
}
