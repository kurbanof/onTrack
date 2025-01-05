<script setup>
import { computed } from 'vue'
import { formatSeconds } from '@/functions'
import { isActivityValid } from '@/validators'
import { useProgress } from '@/composables/progress'
import { HUNDRED_PERCENT } from '@/constants'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const { colorClass, percentage, trackedActivitySeconds } = useProgress(props.activity)
const minPercentage = computed(() => Math.min(percentage.value, HUNDRED_PERCENT))
const classes =
  'rounded  py-2 px-8 text-center border bg-purple-100  border-purple-300/50  text-purple-700'
</script>
<template>
  <li class="mx-5 my-10 mt-4 flex flex-col gap-2 border-4 p-4 text-xl">
    <div class="text-2xl">{{ activity.name }}</div>
    <div class="flex h-8 overflow-hidden rounded border border-gray-200 bg-gray-100">
      <div :class="[colorClass, 'transition-all']" :style="{ width: `${minPercentage}%` }" />
    </div>
    <div class="flex justify-between">
      <span :class="[classes, 'min-w-28']"> {{ minPercentage }}%</span>
      <span :class="classes">
        {{ formatSeconds(trackedActivitySeconds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>
