<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  {
    text: "Samenwerkingsovereenkomst Boris",
    to: "/projects/branding#samenwerking",
  },
  {
    text: "Communicatie Stakeholder",
    to: "/projects/branding#communicatie",
  },
  { text: "Eind Presentatie Boris", to: "/projects/branding#eindpp" },
];
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Professional Standard" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->
          <div id="reflection" class="mb-12">
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je past professionele vaardigheden toe, zowel individueel als in
              teams, op het gebied van projectorganisatie, communicatie met
              stakeholders, verkennend onderzoek en rapportage."
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
