<script setup>
import { navigate } from '@/router'
import { PAGE_PROGRESS } from '../constants'
import BaseIcon from './UI/BaseIcon.vue';
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
        name="CheckCircle"
        class="h-7 text-green-500"
      />
    </div>
    <div
      v-else
      class="flex items-center gap-1"
    >
      <div>Progress: <span>30%</span></div>
      <BaseIcon
        name="EllipsisHorizontalCircle"
        class="h-7 text-blue-500"
      />
    </div>
  </a>
</template>
