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
      <HeaderProject title="Iterative Design" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->
          <div id="reflection" class="mb-12">
            <h2 class="text-4xl font-bold mb-6">Reflectie</h2>
            <div class="space-y-4 max-w-3xl">
              <p class="text-gray-300 leading-relaxed">
                In dit semester heb ik veel geleerd over het iteratieve
                ontwerpproces. Ik heb verschillende versies van designs gemaakt
                en deze getest met gebruikers en stakeholders. Door feedback te
                verzamelen en te verwerken, kon ik mijn ontwerpen continu
                verbeteren.
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
