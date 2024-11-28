<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'

import { isActivityValid, validateActivities } from '@/validators'

defineProps({
  activities: {
    requared: true,
    type: Array,
    validator: validateActivities,
  },
})
const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
})
</script>
<template>
  <div class="flex flex-grow flex-col justify-between">
    <ul>
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
