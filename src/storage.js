import { APP_NAME, MILLISECONDS_IN_SECONDS } from '@/constants'
import { activities } from '@/activities'
import { timelineItems } from '@/timeline-items'
import { isToday, today } from './time'

export function loadState() {
  // const state = storage.load()
  const serializedState = localStorage.getItem(APP_NAME)

  const state = serializedState ? JSON.parse(serializedState) : {}
  
  activities.value = state.activities || activities.value

  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value
}

export function saveState() {
  localStorage.setItem(APP_NAME, JSON.stringify({
    timelineItems: timelineItems.value,
    activities: activities.value,
    lastActiveAt: today()
  }))
}
function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find(({ isActive }) => isActive)

  if (activeTimelineItem) {
    activeTimelineItem.activitySeconds += (today() - lastActiveAt) / MILLISECONDS_IN_SECONDS
  }

  return timelineItems
}
