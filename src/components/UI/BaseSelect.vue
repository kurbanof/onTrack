<script setup>
defineProps({
  selected: Number,
  placeholder: {
    required: true,
    type: String,
  },
  options: {
    required: true,
    type: Array,
    validator(options) {
      return options.every(
        ({ value, label }) => typeof value === 'number' && typeof label === 'string',
      )
    },
  },
})
</script>
<template>
  <select class="rounden w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl outline-none">
    <option selected disabled value="">{{ placeholder }}</option>
    <option
      v-for="{ value, label } in options"
      :key="value"
      :value="value"
      :selected="value === selected"
    >
      {{ label }}
    </option>
  </select>
</template>
