<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="md:max-w-6xl mx-auto pt-18 px-4 text-center">
    <div class="text-white flex items-center flex-col gap-2">
      <h1 class="font-KronaOne md:text-8xl text-4xl">
        {{ title }}
      </h1>
      <h2 class="font-KronaOne md:text-5xl text-3xl text-green-500">
        {{ subtitle }}
      </h2>
    </div>
  </div>
</template>
