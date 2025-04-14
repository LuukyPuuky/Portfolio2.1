<template>
  <div class="max-w-2xl mb-10">
    <h2 class="text-white font-RobotoCondensed md:text-4xl mx-[-2px] text-2xl">
      {{ title }}
    </h2>
    <p class="text-green-400 mb-2 font-Roboto md:text-2xl text-xl">
      {{ subtitle }}
    </p>
    <p class="text-gray-300 font-Roboto md:text-xl text-lg mb-5">
      {{ description }}
    </p>
    <slot></slot>
    <Pdf :documentLink="pdfLink" :buttonText="pdfText" />
  </div>
</template>

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
  description: {
    type: String,
    required: true,
  },
  pdfLink: {
    type: String,
    default: "/",
  },
  pdfText: {
    type: String,
    default: "PDF",
  },
});
</script>
