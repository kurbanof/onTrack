<script setup>
import { ref } from 'vue'
import BaseSelect from './UI/BaseSelect.vue'
import { isTimelineItemValid } from '@/validators'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})
const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' },
]

const selectedActivityId = ref(null)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect :options="options" placeholder="Rest" v-model:modelValue="selectedActivityId" />
  </li>
</template>
