<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <li class="flex-1 duration-200 hover:bg-slate-100 border-x border-t rounded-t-lg font-mono">
    <a v-bind="$attrs" class="flex flex-col items-center p-2 capitalize rounded-t-lg border-t  ">
      <slot/>
    </a>
  </li>
</template>
