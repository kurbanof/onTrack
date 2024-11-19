<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <li class="flex-1 duration-200 hover:bg-slate-100 ">
    <a v-bind="$attrs" class="flex flex-col items-center p-2 capitalize">
      <slot/>
    </a>
  </li>
</template>
