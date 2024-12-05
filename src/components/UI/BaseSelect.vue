<script setup>
import { validateSelectOptions, isUndefinedOrNull, findMatchingOption } from '@/validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { computed, watch } from 'vue'

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
})
const emit = defineEmits(['update:modelValue'])
const model = defineModel()

const isNullOrUndefined = computed(() => isUndefinedOrNull(model.value))

const noOptionMatches = computed(() => {
  return !findMatchingOption(props.options, model.value)
})

const isNotSelected = computed(() => {
  return (isNullOrUndefined.value || noOptionMatches.value) && model.value !== ''
})

watch(
  isNotSelected,
  () => {
    if (isNotSelected.value) {
      model.value = ''
    }
  },
  { immediate: true },
)
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('update:modelValue', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      v-model="model"
    >
      <option disabled value="">
        {{ placeholder }}
      </option>
      <option v-for="{ value, label } in options" :key="value" :value="value" >
        {{ label }}
      </option>
    </select>
  </div>
</template>
