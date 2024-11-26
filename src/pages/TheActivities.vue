<script setup>
import ActivityItem from '@/components/ActivityItem.vue'

const activities = ['Coding', 'Reading', 'Training']
</script>
<template>
  <div>
    <ul>
      <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" v-model="minutesToComplete"/>
    </ul>
  </div>
</template>
