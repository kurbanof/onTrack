<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivityEmptyState from '@/components/TheActivityEmptyState.vue'

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
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
