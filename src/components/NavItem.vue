<script setup>
import { computed } from 'vue';
import { PAGE_ACTIVITIES } from '../constants'
import { currentPage, navigate } from '@/router';
import { isNavItemValid } from '@/validators';
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
  { 'border-x': props.navItem.page === PAGE_ACTIVITIES },
  'duration-900 flex flex-col items-center  p-2  capitalize'
])
const hoverClasses = 'transition hover:duration-200 flex-1 border-4 border-x-2 hover:bg-slate-100'
</script>

<template>
  <li :class="hoverClasses">
    <a
      :href="`#${navItem.page}`"
      :class="classes"
      @click="navigate(navItem.page)"
    >
      <BaseIcon
        :name="navItem.icon"
        class="h-6 w-6"
      /> {{ navItem.page }}
    </a>
  </li>
</template>
