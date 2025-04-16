<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Onderzoek Boris", to: "/projects/branding#onderzoek" },
  { text: "Moodboard Boris", to: "/projects/branding#moodboard" },
  { text: "Midterm Powerpoint Boris", to: "/projects/branding#midterm" },
  { text: "Brandguide Boris", to: "/projects/branding#brandguide" },
  {
    text: "Content Strategie Boris",
    to: "/projects/branding#contentstrategie",
  },
];
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Interactive Media Products" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->
          <div id="reflection" class="mb-12">
            <h2 class="text-4xl font-bold mb-6">Reflectie</h2>
            <div class="space-y-4 max-w-3xl">
              <p class="text-gray-300 leading-relaxed"></p>
            </div>
          </div>

          <ProductsList :products="products" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
