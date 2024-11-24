<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS, PAGE_ACTIVITIES } from '../constants'
import { isPageValid } from '@/validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid,
  },
})
const emit = defineEmits({
  navigate: isPageValid,
})
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        @click="emit('navigate', page)"
        :class="{
          'bg-black text-white transition duration-200': currentPage === page,
          'border-x': page === PAGE_ACTIVITIES,
          
        }"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
