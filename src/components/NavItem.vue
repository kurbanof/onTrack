<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <li class="transition hover:duration-200 flex-1 rounded-t-lg  border-t hover:bg-slate-100">
    <a
      v-bind="$attrs"
      class="duration-900 flex flex-col items-center rounded-t-lg  p-2 capitalize"
    >
      <slot />
    </a>
  </li>
</template>
