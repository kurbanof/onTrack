<script setup>
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants';
import { isTimelineItemValid } from '@/validators';
import { currentHour, formatSeconds } from '@/functions';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseIcon from '@/components/UI/BaseIcon.vue';
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '@/icons'
import { useStopwatch } from '@/composbles/stopwatch';

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
} = useStopwatch(props.timelineItem)
</script>

<template>
  <div class="flex w-full gap-2 ">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="!seconds"
      @click="reset"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>

    <div class="flex grow items-center  rounded px-2 text-3xl outline-none bg-gray-100 ">
      {{ formatSeconds(seconds) }}
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
