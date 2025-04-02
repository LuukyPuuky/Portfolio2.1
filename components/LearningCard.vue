<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "Learning Outcome 4 Professional Standard",
  },
  description: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["pdf-click"]);

const handlePdfClick = () => {
  emit("pdf-click", { pdfUrl: props.pdfUrl });
};
</script>
<template>
  <div class="max-w-2xl">
    <h2 class="text-white font-RobotoCondensed md:text-4xl mx-[-2px] text-2xl">
      {{ title }}
    </h2>
    <p class="text-green-400 mb-2 font-Roboto md:text-2xl text-xl">
      {{ subtitle }}
    </p>
    <p class="text-gray-300 mb-10 font-Roboto md:text-xl text-lg">
      {{ description }}
    </p>
    <button-pdf @click="handlePdfClick" />
  </div>
</template>
