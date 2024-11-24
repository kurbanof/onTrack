<script setup>
import { validateSelectOptions} from '@/validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'

defineProps({
  selected: Number,
  placeholder: {
    required: true,
    type: String,
  },
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions

  }
})
const emit = defineEmits(['select'])

const selectedModel = defineModel('selectedModel')
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      v-model="selectedModel"
    >
      <option selected disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
