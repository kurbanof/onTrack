import { ref, computed } from 'vue'
import { HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
import { now, today, isToday, endofHour, toSeconds } from './time'

export const timelineItemRefs = ref([])

export const timelineItems = ref([])

export const activeTimelineItem = computed(() =>
  timelineItems.value.find(({ isActive }) => isActive)
)

export function initializeTimelineItems(state) {
  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = state.timelineItems ?? generateTimelineItems()

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems()
  }

}

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineActivities(timelineItems, activity) {
  filterTimelinesItemsByActivity(timelineItems, activity)
    .forEach((timelineItem) => updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds: timelineItem.hour === now.value.getHours() ? timelineItem.activitySeconds : 0
    })
    )
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelinesItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0)
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(now.value.getHours(), isSmooth)
}
export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function resetTimelineItems() {
  timelineItems.value.forEach((timelineItem) => {
    updateTimelineItem(timelineItem, {
      activitySeconds: 0,
      isActive: false
    })
  })
}

function syncIdleSeconds(lastActiveAt) {
  updateTimelineItem(activeTimelineItem.value, {
    aactivitySeconds: activeTimelineItem.value.activitySeconds + calculateIdleSeconds(lastActiveAt)
  })
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endofHour(lastActiveAt) - lastActiveAt)
}

function filterTimelinesItemsByActivity(timelineItems, { id }) {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false
  }))
}
