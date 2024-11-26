import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const HOURS_IN_DAY = 24
export const MIDNIGT_HOUR = 0

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
}
export const PERIOD_SELECT_OPTIONS = [
  { value: 15, label: '00:15' },
  { value: 30, label: '00:30' },
  { value: 45, label: '00:45' },
  { value: 60, label: '01:00' },
]
