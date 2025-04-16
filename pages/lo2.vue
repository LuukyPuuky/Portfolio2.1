<script setup lang="ts">
const products = [
  { text: "Leeruitkomsten Slider", to: "/projects/portfolio#leeruitkomsten" },
];
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Development & Version Control" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->
          <div id="reflection" class="mb-12">
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je verkent front-end ontwikkeltalen, schrijft code en
              documenteert in een versiebeheersysteem."
            </p>
            <h2 class="text-4xl font-bold">Reflectie</h2>
            <div class="space-y-4 max-w-2xl">
              <p class="text-gray-300 text-xl">hier komt nog een reflectie</p>
            </div>
          </div>

          <ProductsList :products="products" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
