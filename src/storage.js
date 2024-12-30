import { APP_NAME, MILLISECONDS_IN_SECONDS, SECONDS_IN_HOUR } from '@/constants'
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
    activeTimelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }

  return timelineItems
}
function calculateIdleSeconds(lastActiveAt) {

  let idleMilliseconds = today() - lastActiveAt

  if (lastActiveAt.getHours() !== today().getHours()) {
    idleMilliseconds = getEndofIdleHour(lastActiveAt) - lastActiveAt
  }

  return idleMilliseconds / MILLISECONDS_IN_SECONDS
}

function getEndofIdleHour(lastActiveAt) {
  // const endOfIdleHour = lastActiveAt
  const endOfIdleHour = new Date(lastActiveAt)
  endOfIdleHour.setTime(endOfIdleHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECONDS)
  endOfIdleHour.setMinutes(0, 0, 0)
  return endOfIdleHour
}
