<script setup>
import { ref } from 'vue'

import { TrashIcon } from '@heroicons/vue/24/outline'

import BaseButton from '@/components/UI/BaseButton.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'

import { isActivityValid, isUndefined } from '@/validators'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const emit = defineEmits({
  delete: isUndefined
});

const minutesToComplete = ref(null)
</script>
<template>
  <li class="flex flex-col gap-2 p-5">
    <div class="flex items-center gap-2 border-4">
      <BaseButton :type="BUTTON_TYPE_DANGER" class="rounded-none" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="block truncate text-2xl h-full"> {{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        v-model="minutesToComplete"
      />
    </div>
  </li>
</template>
