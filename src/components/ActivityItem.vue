<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import { isActivityValid, isUndefined, isNumber } from '@/validators'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined,
})
</script>
<template>
  <li class="flex flex-col gap-2 p-5">
    <div class="flex gap-2 ">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        class="rounded-none"
        @click="emit('delete')"
      >
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="flex  items-center grow truncate text-2xl border-4 px-2"> {{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="emit('setSecondsToComplete', $event || 0)"
        class="grow"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
