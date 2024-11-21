<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

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
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <div class="flex gap-2">
      <button
        class="rounded bg-gray-100 p-3 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <XMarkIcon class="h-8" />
      </button>
      <select
        name=""
        id=""
        class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      >
        <option selected disabled value="">Rest</option>
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </li>
</template>
