<script setup>
import { computed } from 'vue'
import { getProgressColorClass } from '@/functions'
import { getActivityProgress } from '../activities'

const props = defineProps(['index', 'activity'])
const timeProgress = ['03:00 / 30:00', '15:00 / 30:00', '21:00 / 30:00', '30:00 / 30:00'][props.index]

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
      <span class="rounded w-[200px] h-10 p-2 text-center bg-purple-100 ">{{ timeProgress }}</span>
    </div>
  </li>
</template>
