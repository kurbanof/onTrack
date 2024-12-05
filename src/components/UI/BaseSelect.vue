<script setup>
import {
  validateSelectOptions,
  isUndefinedOrNull,
  // isTimelineItemValid,
} from '@/validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    required: true,
    type: String,
  },
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  selected: {
    required: true,
  // need to define a validator
  },
})
const emit = defineEmits(['select'])
const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      @change="emit('select', $event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :select="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
