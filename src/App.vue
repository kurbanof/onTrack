<script setup>
import { currentPage, routs } from '@/router'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'

</script>

<template>
  <TheHeader class="mb-7" />

  <main class="flex grow flex-col">
    <KeepAlive>
      <component :is="routs[currentPage]" />
    </KeepAlive>
  </main>

  <TheNav />
</template>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
