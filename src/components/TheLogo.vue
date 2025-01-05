<script setup>
import { currentPage, navigate } from '@/router'
import { PAGE_TIMELINE } from '@/constants'
import { scrollToCurrentHour } from '@/timeline-items'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
