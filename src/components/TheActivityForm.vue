<script setup>
import { nextTick, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

import BaseButton from '@/components/UI/BaseButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/constants'
import { isActivityValid } from '@/validators'
import {id } from '@/functions'

const emit = defineEmits({
  submit: isActivityValid,
})

const name = ref('')

async function submit() {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''
  await nextTick()
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[71px] flex gap-2 border-t-4 bg-white p-5">
    <input
      v-model="name"
      type="text"
      placeholder="Activity name"
      class="w-full gap-2 rounded border-2 px-4 text-xl outline-none hover:bg-purple-100/50 focus:bg-purple-100/50"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
