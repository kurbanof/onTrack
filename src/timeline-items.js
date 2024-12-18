import { ref } from 'vue'
import { HOURS_IN_DAY, MIDNIGT_HOUR } from './constants'
import { currentHour } from './functions'
import { activities } from '@/activities'

export const timelineItemRefs = ref([])
export const timelineItems = ref(generateTimelineItems(activities.value))

export function updateTimelineItem(timelineItem, fields) {
  Object.assign(timelineItem, fields)
}

export function resetTimelineActivities(activity) {
  timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity) )
    .forEach((timelineItem) => updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds: 0
    })
    )
}

export function getTotalActivitySeconds(activity) {
  return timelineItems.value.filter((timelineItem) => hasActivity(timelineItem, activity))
    .reduce((totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds), 0)
}

export function scrollToHour(hour = null, isSmooth = true) {
  hour ??= currentHour()
  const el = hour === MIDNIGT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function hasActivity(timelineItem, activity) {
  return timelineItem.activityId === activity.id
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? (hour * 600) : 0,
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR,
  }))
}