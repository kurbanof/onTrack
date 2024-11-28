<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <li class="transition hover:duration-200 flex-1 border-4 border-x-2 hover:bg-slate-100">
    <a
      v-bind="$attrs"
      class="duration-900 flex flex-col items-center  p-2 capitalize"
    >
      <slot />
    </a>
  </li>
</template>
