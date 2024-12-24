<script setup>
import { watchEffect } from 'vue'
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants';
import { isTimelineItemValid } from '@/validators';
import { currentHour, formatSeconds } from '@/functions';
import { updateTimelineItem } from '@/timeline-items'
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseIcon from '@/components/UI/BaseIcon.vue';
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '@/icons'
import { useStopwatch } from '@/composables/stopwatch';

const props = defineProps({
  timelineItem: {
    require: true,
    type: Object,
    validator: isTimelineItemValid
  }
})
const {
  seconds,
  isRunning,
  start,
  stop,
  reset
} = useStopwatch(props.timelineItem.activitySeconds)

watchEffect(
  () => updateTimelineItem(props.timelineItem, {
    activitySeconds: seconds.value
    // if (props.timelineItem.activityId === null) reset()
    // если надо сделать сброс таймера после удаления активности
  })
)
</script>

<template>
  <div class="flex w-full gap-2 ">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="!timelineItem.activitySeconds"
      @click="reset"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>

    <div class="flex grow items-center  rounded px-2 text-3xl outline-none bg-gray-100 ">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>

    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== currentHour()"
      @click="start"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
