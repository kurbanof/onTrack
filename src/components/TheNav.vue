<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :page="page"
      >
        <component
          :is="icon"
          class="h-6 w-6"
        />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
