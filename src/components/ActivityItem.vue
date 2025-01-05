<script setup>
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constants'
import { isActivityValid } from '@/validators'
import { updateActivities, deleteActivity } from '@/activities'
import { timelineItems, resetTimelineActivities } from '@/timeline-items'
import { ICON_TRASH } from '@/icons'
import RemainingActivitySeconds from '@/components/RemainingActivitySeconds.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from './UI/BaseIcon.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
function deleteAndResetActivity(activity) {
  resetTimelineActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>
<template>
  <li class="flex flex-col gap-2 p-5">
    <div class="flex gap-2">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        class="rounded-none"
        @click="deleteAndResetActivity(activity)"
      >
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="flex grow items-center truncate border-4 px-2 text-2xl">
        {{ activity.name }}
      </span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="updateActivities(activity, { secondsToComplete: $event || 0 })"
        class="grow"
      />
      <RemainingActivitySeconds v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
