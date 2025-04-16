<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Stylescapes Boris", to: "/projects/branding#stylescapes" },
  { text: "Logo's Boris", to: "/projects/branding#logo" },
  { text: "Instagram Posts Boris", to: "/projects/branding#instagram" },
  { text: "Linktree Boris", to: "/projects/branding#linktree" },
  { text: "Spotify Boris", to: "/projects/branding#spotify" },
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
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je verkent en gebruikt professionele ontwerptools en ontwerpt
              visuele werken op een iteratieve manier."
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
