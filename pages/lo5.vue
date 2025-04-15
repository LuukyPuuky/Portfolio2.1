<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Team Roles", to: "/projects/portfolio#teamroles" },
  { text: "16 Personalities", to: "/projects/portfolio#personal" },
];
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Personal Leadership" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->
          <div id="reflection" class="mb-12">
            <h2 class="text-4xl font-bold mb-6">Reflectie</h2>
            <div class="space-y-4 max-w-3xl">
              <p class="text-gray-300 leading-relaxed">
                In dit semester heb ik geleerd hoe belangrijk persoonlijke
                leiderschap is in het werkveld. Door het maken van een
                samenwerkingsovereenkomst en het volgen van professionele
                richtlijnen, heb ik ervaren hoe dit bijdraagt aan een succesvol
                project.
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
