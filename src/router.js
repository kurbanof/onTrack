import { ref } from "vue"
import { isPageValid } from '@/validators'
import { PAGE_TIMELINE } from '@/constants'

export const currentPage = ref(normalizePageHash())

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
  document.body.scrollIntoView()
  currentPage.value = page
}
