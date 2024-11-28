<script setup>
import { ref } from 'vue'

import { PlusIcon } from '@heroicons/vue/24/outline'

import ActivityItem from '@/components/ActivityItem.vue'
import BaseButton from '@/components/UI/BaseButton.vue'

import { isActivityValid, validateActivities } from '@/validators'
import { BUTTON_TYPE_PRIMARY } from '@/constants'

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

const newActivity = ref('')
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
    <form
      @submit.prevent="emit('createActivity', newActivity)"
      class="sticky bottom-[71px] flex gap-2 border-t-4 bg-white p-5"
    >
      <input
        v-model="newActivity"
        type="text"
        placeholder="Activity name"
        class="w-full gap-2 rounded border-2 px-4 text-xl outline-none hover:bg-purple-100/50 focus:bg-purple-100/50"
      />
      <BaseButton :type="BUTTON_TYPE_PRIMARY">
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
