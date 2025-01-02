import { ref, computed } from 'vue'
import { HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
import { now } from './time'

export const timelineItemRefs = ref([])

export const timelineItems = ref(generateTimelineItems())

export const activeTimelineItem = computed(() =>
  timelineItems.value.find(({ isActive }) => isActive)
)
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

export function resetTimelineItems(timelineItems){
  return timelineItems.map((timelineItem)=>({
    ...timelineItem,
    activitySeconds: 0,
    isActive: false
  }))
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(now.value.getHours(), isSmooth)
}
export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
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
