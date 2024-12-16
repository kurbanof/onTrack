<script setup>
import { navigate } from '@/router'
import { PAGE_TIMELINE } from '../constants'
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    @click="navigate(PAGE_TIMELINE)"
  >
    <img
      src="../assets/img/logo.png"
      alt="Logo"
      class="h-9"
    />
  </a>
</template>
