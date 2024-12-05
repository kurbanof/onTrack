<script setup>
import { validateSelectOptions } from '@/validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/UI/BaseButton.vue'
defineProps({
  selected: Number,
  placeholder: {
    required: true,
    type: String,
  },
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})
const emit = defineEmits({
  select(value) {
    return typeof value === 'number'
  },
})
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="$emit('select', null)">
      <XMarkIcon class="h-5 w-5" />
    </BaseButton>
    <select
      class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      @change="emit('select', +$event.target.value)"
    >
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
