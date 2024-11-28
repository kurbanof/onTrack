<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

import BaseButton from '@/components/UI/BaseButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/constants'
import { isActivityValid } from '@/validators'

const emit = defineEmits({
  submit: isActivityValid,
})

const activity = ref('')

function submit() {
  emit('submit', activity.value)
  activity.value = ''
}

</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[71px] flex gap-2 border-t-4 bg-white p-5">
    <input
      v-model="activity"
      type="text"
      placeholder="Activity name"
      class="w-full gap-2 rounded border-2 px-4 text-xl outline-none hover:bg-purple-100/50 focus:bg-purple-100/50"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
