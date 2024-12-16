import { ref } from "vue"
import { isPageValid } from '@/validators'
import { PAGE_TIMELINE } from '@/constants'

export const currentPage = ref(normalizePageHash())

export const timelineRef = ref() // это ссылка соединяющая timeline с компонентом TheTimeline, который в свою очередь поедоставляет доступ к функции scrollToHour() посредством макроса defineExpose

export function normalizePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    window.location.hash = page
    return page
  } else {
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}
export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour()
  } else if (page !== PAGE_TIMELINE && currentPage.value !== page) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
}
