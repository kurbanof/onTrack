<script setup>
import { CheckCircleIcon, EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_PROGRESS } from '../constants'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" class="  text-lg">
    <div v-if="true" class="flex items-center gap-1">
      Day complete!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Progress: <span >30%</span></div>
      <EllipsisHorizontalCircleIcon class="h-7 text-blue-500" />
    </div>
  </a>
</template>
