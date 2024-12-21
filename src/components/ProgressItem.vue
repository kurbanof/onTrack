<script setup>
import { computed } from 'vue'
import { formatSeconds, getProgressColorClass } from '@/functions'
import { isActivityValid } from '@/validators'
import { getActivityProgress } from '../activities'
import { getTotalActivitySeconds } from '@/timeline-items';

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const progress = computed(() => getActivityProgress(props.activity))
</script>
<template>
  <li class="flex flex-col gap-2 p-4 text-xl border-4 mx-5 mt-4 my-10">
    <div class="text-2xl ">{{ activity.name }}</div>
    <div class="flex h-8 overflow-hidden rounded bg-gray-100 border border-gray-200  ">
      <div
        :class="getProgressColorClass(progress)"
        :style="`width: ${progress}%`"
      />
    </div>
    <div class="flex justify-between">
      <span class="rounded w-[100px] h-10 p-2 text-center bg-purple-100 ">{{ progress }}%</span>
      <span class="rounded h-10 p-2 text-center bg-purple-100 ">
        {{ formatSeconds(getTotalActivitySeconds(activity)) }} /
        {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>
