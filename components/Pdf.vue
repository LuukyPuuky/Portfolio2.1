<template>
  <button
    class="relative overflow-hidden flex items-center gap-3 bg-green-500 text-black font-bold text-xl rounded-full py-3 px-6 cursor-pointer"
  >
    <span
      class="absolute inset-0 bg-gradient-to-l from-green-500 to-purple-400 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
    ></span>
    <FileText class="w-6 h-6 relative z-10" />
    <span class="font-KronaOne text-lg relative z-10">PDF</span>
  </button>
</template>

<script setup>
import { FileText } from "lucide-vue-next";
</script>

<style scoped>
button:hover .absolute {
  opacity: 1;
}
</style>
