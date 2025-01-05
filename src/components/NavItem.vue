<script setup>
import { computed } from 'vue'
import { PAGE_TIMELINE } from '@/constants'
import { currentPage, navigate } from '@/router'
import { isNavItemValid } from '@/validators'
import { scrollToCurrentHour } from '@/timeline-items'
import BaseIcon from './UI/BaseIcon.vue'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid,
  },
})
const classes = computed(() => [
  'duration-900 flex flex-col items-center  p-2  capitalize border-4 border-x-2',
  currentPage.value === props.navItem.page
    ? 'bg-slate-200/55 transition duration-200'
    : 'transition hover:duration-200 hover:bg-slate-100/80',
])

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page)
}
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon :name="navItem.icon" class="h-6 w-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
