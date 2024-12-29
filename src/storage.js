import { APP_NAME } from '@/constants'
import { activities } from '@/activities'
import { timelineItems } from '@/timeline-items'
import { isToday, today } from './time'

export function loadState() {
  // const state = storage.load()
  const serializedState = localStorage.getItem(APP_NAME)

 const state = serializedState ? JSON.parse(serializedState) : {}

  timelineItems.value = isToday(new Date(state.date)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities || activities.value
}

export function saveState() {
  localStorage.setItem(APP_NAME, JSON.stringify({
    timelineItems: timelineItems.value,
    activities: activities.value,
    date: today()
  }))
}

