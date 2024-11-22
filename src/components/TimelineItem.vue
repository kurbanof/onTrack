<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseSelect from './UI/BaseSelect.vue'
import BaseButton from './UI/BaseButton.vue'

const props = defineProps(['timelineItem'])

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

const selectedActivityId = 1
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <div class="flex gap-2">
      <BaseButton>
        <XMarkIcon class="h-8" />
      </BaseButton>
      <BaseSelect :options="options" placeholder="Rest" :selected="selectedActivityId" />
    </div>
  </li>
</template>
