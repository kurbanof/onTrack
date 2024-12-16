<script setup>
import { inject } from 'vue'
import { BUTTON_TYPE_DANGER } from '@/constants'
import { setActivitySecondsToCompleteKey, periodSelectOptionsKey, deleteActivityKey } from '@/keys'
import { isActivityValid } from '@/validators'

import { TrashIcon } from '@heroicons/vue/24/outline'

import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import BaseButton from '@/components/UI/BaseButton.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const deleteActivity = inject(deleteActivityKey)
const periodSelectOptions = inject(periodSelectOptionsKey)
const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
</script>
<template>
  <li class="flex flex-col gap-2 p-5">
    <div class="flex gap-2 ">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        class="rounded-none"
        @click="deleteActivity(activity)"
      >
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="flex  items-center grow truncate text-2xl border-4 px-2"> {{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event)"
        class="grow"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
