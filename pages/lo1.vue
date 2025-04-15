<script setup lang="ts">
import Lo1Products from "~/components/lo1Products.vue";

const products = [
  { text: "Moodboard Boris", to: "/projects/branding#moodboard" },
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
              <p class="text-gray-300 leading-relaxed">
                Boris is een talentvolle DJ en producer aan de Rockacademie van
                Fontys, bekend om zijn melodische techno en energieke beats. Het
                doel was om zowel een jonger publiek aan te spreken als zijn
                bestaande fanbase te behouden. We richtten ons op
                socialmediastrategieën, visuele branding, merchandise en het
                ontwerpen van een nieuwe website om zijn unieke stijl te
                weerspiegelen en verder te ontwikkelen.
              </p>
            </div>
          </div>

          <Lo1Products :products="products" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
