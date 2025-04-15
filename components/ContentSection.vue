<template>
  <div class="max-w-2xl mb-10">
    <h2 class="text-white font-RobotoCondensed md:text-4xl mx-[-2px] text-2xl">
      {{ title }}
    </h2>
    <NuxtLink
      :to="`/lo${loNumber}`"
      class="text-green-400 mb-2 font-Roboto md:text-2xl text-xl group relative"
    >
      {{ subtitle }}
      <!-- Underline Span -->
      <span
        class="absolute left-0 top-7 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
      ></span>
    </NuxtLink>
    <p class="text-gray-300 font-Roboto md:text-xl text-lg mb-5">
      {{ description }}
    </p>
    <slot></slot>
    <Pdf
      v-if="pdfLink && pdfLink !== '/'"
      :documentLink="pdfLink"
      :buttonText="pdfText"
    />
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
  loNumber: {
    type: Number,
    required: true,
  },
});
</script>
