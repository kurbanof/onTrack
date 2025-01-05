<script setup>
import { activities } from '@/activities'

import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivityEmptyState from '@/components/TheActivityEmptyState.vue'
</script>
<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>
    <TheActivityEmptyState v-else />
    <TheActivityForm />
  </div>
</template>
