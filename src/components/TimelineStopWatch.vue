<script setup>
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants';
import BaseButton from '@/components/UI/BaseButton.vue';
import { ArrowPathIcon, PlayIcon, PauseIcon } from '@heroicons/vue/24/outline';
import { isNumber } from '@/validators';
import { formatSeconds } from '@/functions';

defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})


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
