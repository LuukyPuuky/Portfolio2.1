<script setup lang="ts">
import Footer from "~/components/footer.vue";
</script>

<template>
  <div
    class="scrollbar scrollbar-thumb-green-500 scrollbar-track-[#0f172a]"
  ></div>
  <div class="bg-[#0f172a] text-white">
    <Navbar />
    <Headerhero />
    <HorizontalCardGroup id="learningoutcomes" />
    <CardStackGroup id="projects" />
    <Footer />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background-color: #00c951;
  border-radius: 10px;
}

html {
  scroll-behavior: smooth;
}
</style>
