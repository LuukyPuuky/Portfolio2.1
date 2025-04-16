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
          <
          <div id="reflection" class="mb-12">
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je oriënteert je op het relevante technologie-, media- en
              ontwerplandschap en creëert interactieve mediaproducten die je
              hebt getest met gebruikers en stakeholders."
            </p>
            <h2 class="text-4xl font-bold">Reflectie</h2>
            <div class="space-y-4 max-w-2xl">
              <p class="text-gray-300 text-xl">hier komt nog een reflectie</p>
              <p class="text-gray-300 text-xl">
                Ook heb ik feedback gevraagd aan mijn groepsgenoten en aan mijn
                leraren over het process.
              </p>
            </div>
          </div>

          <ProductsList :products="products" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
