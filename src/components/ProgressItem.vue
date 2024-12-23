<script setup>
import { computed } from 'vue'
import { formatSeconds, getProgressColorClass } from '@/functions'
import { isActivityValid } from '@/validators'
import { calculateActivityCompletionPercentage } from '../activities'
import { timelineItems, calculateTrackedActivitySeconds } from '@/timeline-items';

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const percentage = computed(() => calculateActivityCompletionPercentage(props.activity, trackedActivitySeconds.value))

const trackedActivitySeconds = computed(() => calculateTrackedActivitySeconds(timelineItems.value, props.activity))
</script>
<template>
  <li class="flex flex-col gap-2 p-4 text-xl border-4 mx-5 mt-4 my-10">
    <div class="text-2xl ">{{ activity.name }}</div>
    <div class="flex h-8 overflow-hidden rounded bg-gray-100 border border-gray-200  ">
      <div
        :class="getProgressColorClass(percentage)"
        :style="`width: ${percentage}%`"
      />
    </div>
    <div class="flex justify-between">
      <span class="rounded w-[100px] p-2 text-center bg-purple-100 ">{{ percentage }}%</span>
      <span class="rounded p-2 px-8 text-center bg-purple-100 ">
        {{ formatSeconds(trackedActivitySeconds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>
