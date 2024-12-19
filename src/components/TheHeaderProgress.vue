<script setup>
import { navigate } from '@/router'
import { PAGE_PROGRESS } from '../constants'
import BaseIcon from '@/components/UI/BaseIcon.vue'
import { ICON_CHECK_CIRCLE, ICON_ELLIPSIS_HORIZONTAL_CIRCLE  } from '@/icons'
</script>
<template>
  <a
    :href="`#${PAGE_PROGRESS}`"
    @click="navigate(PAGE_PROGRESS)"
    class="text-lg"
  >
    <div
      v-if="true"
      class="flex items-center gap-1"
    >
      Day complete!
      <BaseIcon
        :name="ICON_CHECK_CIRCLE"
        classes="h-7 text-green-500"
      />
    </div>
    <div
      v-else
      class="flex items-center gap-1"
    >
      <div>Progress: <span>30%</span></div>
      <BaseIcon
        :name="ICON_ELLIPSIS_HORIZONTAL_CIRCLE"
        classes="h-7 text-blue-500"
      />
    </div>
  </a>
</template>
