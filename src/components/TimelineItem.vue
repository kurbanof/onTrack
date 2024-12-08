<script setup>
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './UI/BaseSelect.vue'
import BaseButton from '@/components/UI/BaseButton.vue';
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, NULLABLE_ACTIVITY } from '@/constants';
import {
  isTimelineItemValid,
  isActivityValid,
  validateSelectOptions,
  validateActivities,
} from '@/validators'
import { ArrowPathIcon, PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid
})
function selecteActivity(id) {
  emit('selectActivity', findActivityById(id))
}
function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t-4 border-gray-100 px-5 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :options="activitySelectOptions"
      :selected="timelineItem.activityId"
      @select="selecteActivity"
    />
    <div class="flex w-full gap-2 ">
      <BaseButton :type="BUTTON_TYPE_PRIMARY">
        <ArrowPathIcon class="h-8" />
      </BaseButton>

      <div class="flex flex-grow items-center  rounded px-2 text-2xl outline-none bg-purple-200/50 ">
        00:00:00</div>

      <BaseButton :type="BUTTON_TYPE_WARNING">
        <PauseIcon class="h-8" />
      </BaseButton>

      <BaseButton :type="BUTTON_TYPE_SUCCESS">
        <PlayIcon class="h-8" />
      </BaseButton>
    </div>
  </li>
</template>
