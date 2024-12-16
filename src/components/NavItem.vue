<script setup>
import { computed } from 'vue';
import { currentPage, navigate } from '@/router';
import { isNavItemValid } from '@/validators';
import { PAGE_ACTIVITIES } from '../constants'


const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})
const classes = computed(() => [
  { 'bg-slate-100 transition duration-200': currentPage.value === props.page },
  { 'border-x': props.page === PAGE_ACTIVITIES },
  'duration-900 flex flex-col items-center  p-2 capitalize'
])
</script>

<template>
  <li class="transition hover:duration-200 flex-1 border-4 border-x-2 hover:bg-slate-100">
    <a
      :href="`#${navItem.page}`"
      :class="classes"
      @click="navigate(navItem.page)"
    >
      <component
        :is="navItem.icon"
        class="h-6 w-6"
      /> {{ navItem.page }}
    </a>
  </li>
</template>
