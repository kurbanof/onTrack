<script setup>
import { ref } from 'vue'
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECONDS } from '@/constants';
import BaseButton from '@/components/UI/BaseButton.vue';
import { ArrowPathIcon, PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';
import { isNumber } from '@/validators';
import { formatSeconds } from '@/functions';

const props = defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})
const seconds = ref(props.seconds)
const isRunning = ref(false)

function start() {
  isRunning.value = setInterval(() => {
    seconds.value++
  }, MILLISECONDS_IN_SECONDS);
}
function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}
function reset() {
  stop()
  seconds.value = 0
}
</script>
<template>
  <div class="flex w-full gap-2 ">
    <BaseButton
      :type="BUTTON_TYPE_PRIMARY"
      @click="reset"
    >
      <ArrowPathIcon class="h-8" />
    </BaseButton>

    <div class="flex flex-grow items-center  rounded px-2 text-3xl outline-none bg-purple-200/50 ">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning"
      :type="BUTTON_TYPE_WARNING"
      @click="stop">
      <PauseIcon class="h-8" />
    </BaseButton>

    <BaseButton v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
    >
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>
