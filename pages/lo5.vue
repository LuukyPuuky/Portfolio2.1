<script setup lang="ts">
import ReflectionSection from "~/components/reflectionSection.vue";
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Professional Standards" />
      <ReflectionSection />
      <Footer />
    </div>
  </div>
</template>
