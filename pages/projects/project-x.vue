<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Project X" subtitle="Spline" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto"></div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup>
import ScrollToBottom from "~/components/ScrollToBottom.vue";
</script>
