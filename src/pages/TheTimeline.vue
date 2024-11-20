<script setup>
import { generateTimelineItems } from '../functions'
const timelineItems = generateTimelineItems();
</script>
<template>
  <div>
    <ul>
      <li
        v-for="{hour} in timelineItems"
        :key="hour"
        class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-4 py-10"
      >
        <a
          href="#"
          class="text-grey-500 absolute -top-4 left-1/2 block -translate-x-1/2 rounded bg-gray-100 px-2 font-mono text-lg"
          >{{ hour }}:00</a
        >
      </li>
    </ul>
  </div>
</template>
