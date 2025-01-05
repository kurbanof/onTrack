import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from './constants'

export const activities = ref([])

export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete),
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function createActivity(activity) {
  activities.value.push(activity)
}

export function initializeActivities(state) {
  return (activities.value = state.activities || [])
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
export function updateActivities(activity, fields) {
  Object.assign(activity, fields)
}

export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete || 0
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}
export function calculateCompletionPercentage(trackedTotalSeconds) {
  return Math.floor((trackedTotalSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}
