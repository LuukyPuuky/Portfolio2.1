<template>
  <NuxtLink
    :to="documentLink"
    target="_blank"
    class="relative overflow-hidden inline-flex items-center gap-2 bg-green-500 text-black font-bold rounded-full py-2 px-4 cursor-pointer"
  >
    <span
      class="absolute inset-0 bg-gradient-to-l from-green-500 to-purple-400 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
    ></span>
    <FileText class="w-5 h-5 relative z-10" />
    <span class="font-KronaOne text-sm relative z-10">{{ buttonText }}</span>
  </NuxtLink>
</template>

<script setup>
import { FileText } from "lucide-vue-next";

// Define props for the component
const props = defineProps({
  documentLink: {
    type: String,
    default: "/",
  },
  buttonText: {
    type: String,
    default: "PDF",
  },
});
</script>

<style scoped>
button:hover .absolute {
  opacity: 1;
}

a:hover .absolute {
  opacity: 1;
}
</style>
