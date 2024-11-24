<script setup>
import { ref } from 'vue';
import BaseSelect from './UI/BaseSelect.vue'
import { isTimelineItemValid } from '@/validators';

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' },
]

const hourLinkClasses = [
  ' absolute -top-4 left-1/2 block -translate-x-1/2 rounded px-2 text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-green-500 text-white font-black'
    : 'text-grey-500 bg-gray-100  ',
]

const selectedActivityId = ref()
// временно указан не существующее значение
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>

      <BaseSelect :options="options" placeholder="Rest" v-model:selected-model="selectedActivityId" @select="selectedActivityId = $event" />

  </li>
</template>
