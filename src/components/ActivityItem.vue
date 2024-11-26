<script setup>
import { ref } from 'vue'

import { TrashIcon } from '@heroicons/vue/24/outline'

import BaseButton from '@/components/UI/BaseButton.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'

defineProps({
  activity: {
    requared: true,
    type: String
  }
})


const periodSelectOptions = [
  { value: 15, label: '00:15' },
  { value: 30, label: '00:30' },
  { value: 45, label: '00:45' },
  { value: 60, label: '01:00' },
]

const minutesToComplete = ref(null)

</script>
<template>
  <li class="flex flex-col gap-2 p-5">
    <div class="flex items-center gap-2 border-4">
      <BaseButton> <TrashIcon class="h-8" /></BaseButton>
      <span class="block truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect class="font-mono" placeholder="hh:mm" :options="periodSelectOptions" v-model="minutesToComplete"/>
    </div>
  </li>
</template>
