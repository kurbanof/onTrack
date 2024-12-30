<script setup>
import { computed } from 'vue';
import { currentPage, navigate } from '@/router';
import { isNavItemValid } from '@/validators';
import { scrollToCurrentHour } from '@/timeline-items'
import BaseIcon from './UI/BaseIcon.vue';

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})
const classes = computed(() => [
  { 'bg-slate-100 transition duration-200': currentPage.value === props.navItem.page },
  'duration-900 flex flex-col items-center  p-2  capitalize'
])
const hoverClasses = 'transition hover:duration-200 flex-1 border-4 border-x-2 hover:bg-slate-100'

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
  ? scrollToCurrentHour(true)
  : navigate(props.navItem.page)
}

</script>

<template>
  <li :class="hoverClasses">
    <a
      :href="`#${navItem.page}`"
      :class="classes"
      @click="handleClick"
    >
      <BaseIcon
        :name="navItem.icon"
        class="h-6 w-6"
      /> {{ navItem.page }}
    </a>
  </li>
</template>
