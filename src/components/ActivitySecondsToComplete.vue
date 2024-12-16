<script setup>
import { computed, inject } from 'vue';
import { timelineItemsKey } from '@/keys'
import { formatSeconds, getTotalActivitySeconds } from '@/functions';
import { isActivityValid } from '@/validators';
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const timelineItems = inject(timelineItemsKey)

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(() => secondsDiff.value >= 0 ? '+' : '-')
const secondsDiff = computed(() => getTotalActivitySeconds(props.activity, timelineItems.value) - props.activity.secondsToComplete
)

const colorClasses = computed(() => secondsDiff.value < 0 ? redColor : greenColor)

const redColor = 'border-red-300/50 bg-red-100 text-red-700'
const greenColor = ' border-green-300/50 bg-green-100 text-green-700'

const classes = computed(() => `flex items-center border-4 rounded px-2 text-xl ${colorClasses.value}`)

</script>
<template>
  <div :class="classes">
    {{ seconds }}</div>
</template>
