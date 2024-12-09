<script setup>
import { inject, ref } from 'vue'
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECONDS } from '@/constants';
import BaseButton from '@/components/UI/BaseButton.vue';
import { ArrowPathIcon, PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';
import { isTimelineItemValid } from '@/validators';
import { formatSeconds } from '@/functions';

const props = defineProps({
  timelineItem: {
    require: true,
    type: Object,
    validate: isTimelineItemValid
  }
})
const updateTimelineItemActivitySeconds = inject('updateTimelineItemActivitySeconds')

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItemActivitySeconds(props.timelineItem, 1)
    seconds.value++
  }, MILLISECONDS_IN_SECONDS);
}
function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}
function reset() {
  stop()
  updateTimelineItemActivitySeconds(props.timelineItem, -seconds.value)
  seconds.value = 0
}

const isStartButtonDisabled = props.timelineItem.hour !== new Date().getHours()
</script>

<template>
  <div class="flex w-full gap-2 ">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      :disabled="!seconds"
      @click="reset"
    >
      <ArrowPathIcon class="h-8" />
    </BaseButton>

    <div class="flex grow items-center  rounded px-2 text-3xl outline-none bg-gray-100 ">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton
      v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop"
    >
      <PauseIcon class="h-8" />
    </BaseButton>

    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="isStartButtonDisabled"
      @click="start"
    >
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>
