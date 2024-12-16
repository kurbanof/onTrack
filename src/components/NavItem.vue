<script setup>
import { computed } from 'vue';
import { currentPage, navigate } from '@/router';
import { isPageValid } from '@/validators';
import { PAGE_ACTIVITIES } from '../constants'


const props = defineProps({
  page: {
    required: true,
    type: String,
    validator: isPageValid
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
      :href="`#${page}`"
      :class="classes"
      @click="navigate(page)"
    >
      <slot />
    </a>
  </li>
</template>
