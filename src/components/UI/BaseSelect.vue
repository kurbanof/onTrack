<script setup>
import { computed } from 'vue'
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '@/validators'
import { normalizeSelectValue } from '@/functions'
import { ICON_X_MARK } from '@/icons'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseIcon from '@/components/UI/BaseIcon.vue'

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
  selected: [String, Number],
})
const emit = defineEmits({
  select: isSelectValueValid,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
      class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
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
