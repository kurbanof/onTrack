<script setup>
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants';
import { isTimelineItemValid } from '@/validators';
import { formatSeconds } from '@/functions';
import {
  startTimelineItemTimer,
  stopTimelineItemTimer,
  resetTimelineItemTimer,
  timelineItemTimer
} from '@/timeline-items'
import { now } from '@/time';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseIcon from '@/components/UI/BaseIcon.vue';
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '@/icons'

defineProps({
  timelineItem: {
    require: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

</script>

<template>
  <div class="flex w-full gap-2 ">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="!timelineItem.activitySeconds"
      @click="$event => resetTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>

    <div class="flex grow items-center  rounded px-2 text-3xl outline-none bg-gray-100 ">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItemTimer && timelineItem.hours === now.getHours()"
      :type="BUTTON_TYPE_WARNING"
      @click="$event => stopTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>

    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== now.getHours()"
      @click="$event => startTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
