<script setup>
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECONDS } from '@/constants';
import BaseButton from '@/components/UI/BaseButton.vue';
import { ArrowPathIcon, PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';
import { isNumber } from '@/validators';

defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})

function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
</script>
<template>
  <div class="flex w-full gap-2 ">
    <BaseButton :type="BUTTON_TYPE_PRIMARY">
      <ArrowPathIcon class="h-8" />
    </BaseButton>

    <div class="flex flex-grow items-center  rounded px-2 text-3xl outline-none bg-purple-200/50 ">{{
      formatSeconds(seconds) }}</div>

    <BaseButton :type="BUTTON_TYPE_WARNING">
      <PauseIcon class="h-8" />
    </BaseButton>

    <BaseButton :type="BUTTON_TYPE_SUCCESS">
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>
