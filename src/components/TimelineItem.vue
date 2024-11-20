<script setup>
const props = defineProps(['timelineItem'])
const hourLinkClasses = [
  ' absolute -top-4 left-1/2 block -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-green-500 text-white font-black'
    : 'text-grey-500 bg-gray-100  ',
]
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
  </li>
</template>
