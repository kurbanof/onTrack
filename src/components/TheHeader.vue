<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';
import { isPageValid } from '@/validators';

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b-4 bg-slate-100 p-3">
    <TheLogo @click="emit('navigate',PAGE_TIMELINE)"/>
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)"/>
  </header>
</template>
