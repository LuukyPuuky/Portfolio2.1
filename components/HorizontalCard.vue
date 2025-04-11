<template>
  <div
    :to="buttonLink"
    class="w-[70vw] max-w-[500px] h-[60vh] flex-shrink-0 border-2 border-gray-300 text-white flex flex-col justify-between p-[30px_40px] box-border"
  >
    <div class="font-KronaOne text-8xl text-green-500">{{ number }}</div>
    <div class="font-KronaOne text-4xl text-gray-300">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    default: "/",
  },
});
</script>
