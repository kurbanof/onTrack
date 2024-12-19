<script setup>
import { trackedActivities } from '@/activities'
import ProgressItem from '@/components/ProgressItem.vue'
</script>
<template>
  <ul>
    <ProgressItem v-for="(activity, index) in trackedActivities" :key="activity.id" :index="index" :activity="activity" />
  </ul>
</template>
