<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
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
})
</script>
<template>
  <div>
    <ul>
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
  </div>
</template>
