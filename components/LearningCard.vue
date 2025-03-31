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
  <div>
    <h2 class="text-white mb-1 font-RobotoCondensed text-4xl">{{ title }}</h2>
    <p class="text-green-400 mb-2 font-Roboto text-2xl">{{ subtitle }}</p>
    <p class="text-gray-300 mb-4 font-Roboto">{{ description }}</p>
    <button-pdf @click="handlePdfClick" />
  </div>
</template>
