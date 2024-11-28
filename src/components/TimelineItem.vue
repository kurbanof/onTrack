<script setup>
import { ref } from 'vue'
import BaseSelect from './UI/BaseSelect.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/validators'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const selectedActivityId = ref(null)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      v-model:modelValue="selectedActivityId"
    />
  </li>
</template>
