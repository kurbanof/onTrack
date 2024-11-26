<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import {validateActivities} from '@/validators'
defineProps({
  activities: {
    requared: true,
    type: Array,
    validator: validateActivities
  },
})
</script>
<template>
  <div>
    <ul>
      <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
