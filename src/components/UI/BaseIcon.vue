<script setup>
import { isIconValid } from '@/validators'
import { ICONS } from '@/icons'
defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  },
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
