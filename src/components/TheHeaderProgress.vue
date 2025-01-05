<script setup>
import { navigate } from '@/router'
import { PAGE_PROGRESS, HUNDRED_PERCENT } from '../constants'
import { useTotalProgress } from '@/composables/total-progress'
import BaseIcon from '@/components/UI/BaseIcon.vue'
import { ICON_CHECK_CIRCLE } from '@/icons'
const { percentage, colorClass } = useTotalProgress()

// const iconColor = watchEffect(() => console.log(typeof ('text' + colorClass.value.slice(2))))
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)" class="text-lg">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-2">
      <div>
        Progress: <span>{{ percentage }}%</span>
      </div>
      <div :class="`h-5 w-5 rounded-full border-2 border-gray-300 ${colorClass}`" />
    </div>
    <div v-else class="flex items-center gap-1">
      Day complete!
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
