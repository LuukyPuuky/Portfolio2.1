<template>
  <div
    class="scrollbar scrollbar-thumb-green-500 scrollbar-track-[#0f172a]"
  ></div>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <ClientOnly>
      <Headerhero />
    </ClientOnly>
    <div
      class="flex justify-center items-center flex-col text-5xl gap-5 font-KronaOne px-4 md:px-0 pt-10 md:pt-20"
    >
      <p>Keep scrolling down</p>
      <ChevronsDown class="animate-bounce size-9" />
    </div>
    <HorizontalCardGroup id="learningoutcomes" />
    <CardStackGroup id="projects" />
    <ScrollToBottom />
    <Footer />
  </div>
</template>

<script setup>
import { ChevronsDown } from "lucide-vue-next";
import Threetest from "~/components/ThreeHold.vue";
</script>

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
