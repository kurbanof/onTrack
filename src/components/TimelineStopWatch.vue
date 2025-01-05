<script setup>
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants'
import { isTimelineItemValid } from '@/validators'
import { formatSeconds } from '@/functions'
import {
  startTimelineItemTimer,
  stopTimelineItemTimer,
  resetTimelineItemTimer,
} from '@/timeline-item-timer'
import { now } from '@/time'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from '@/components/UI/BaseIcon.vue'
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '@/icons'
import { activeTimelineItem } from '@/timeline-items'

defineProps({
  timelineItem: {
    require: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="!timelineItem.activitySeconds"
      @click="($event) => resetTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>

    <div class="flex grow items-center rounded bg-gray-100 px-2 text-3xl outline-none">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItem === activeTimelineItem"
      :type="BUTTON_TYPE_WARNING"
      @click="stopTimelineItemTimer"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>

    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== now.getHours()"
      @click="startTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
