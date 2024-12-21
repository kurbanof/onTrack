<script setup>
import { ref, watch } from 'vue'
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECONDS } from '@/constants';
import { isTimelineItemValid } from '@/validators';
import { currentHour, formatSeconds } from '@/functions';
import { updateTimelineItem } from '@/timeline-items'
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseIcon from '@/components/UI/BaseIcon.vue';
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '@/icons'

const props = defineProps({
  timelineItem: {
    require: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)
const temp = 120

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, { activitySeconds: props.timelineItem.activitySeconds + temp })
    seconds.value++
  }, MILLISECONDS_IN_SECONDS);
}
function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}
function reset() {
  stop()
  updateTimelineItem(props.timelineItem, { activitySeconds: props.timelineItem.activitySeconds - seconds.value * temp })
  seconds.value = 0
}

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value * temp })
    // if (props.timelineItem.activityId === null) reset()
    // если надо сделать сброс таймера после удаления акттивности
  })

const isStartButtonDisabled = props.timelineItem.hour !== currentHour()
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
      :disabled="isStartButtonDisabled"
      @click="start"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
