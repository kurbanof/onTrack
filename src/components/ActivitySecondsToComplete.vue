<script setup>
import { isActivityValid } from '@/validators';
import { formatSeconds } from '@/functions';
defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
</script>
<template>
  <div class="flex items-center bg-purple-100 rounded px-2 text-xl text-purple-600">{{
    formatSeconds(activity.secondsToComplete) }}</div>
</template>
