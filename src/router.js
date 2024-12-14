import { ref } from "vue"
import { normalizePageHash } from '@/functions'
import { PAGE_TIMELINE } from '@/constants'

export const currentPage = ref(normalizePageHash())

export const timelineRef = ref() // это ссылка соединяющая timeline с компонентом TheTimeline, который в свою очередь поедоставляет доступ к функции scrollToHour() посредством макроса defineExpose

export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour()
  } else if (page !== PAGE_TIMELINE && currentPage.value !== page) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
}
