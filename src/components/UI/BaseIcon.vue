<script setup>
import { isIconValid, isNotEmptyString } from '@/validators';
import { ICONS } from '@/icons'
defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid
  },
  classes: {
    default: 'h-8',
    type: String,
    validator: isNotEmptyString
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="classes" />
</template>
