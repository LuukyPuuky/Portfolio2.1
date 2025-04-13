<script setup lang="ts">
import ReflectionSection from "~/components/reflectionSection.vue";
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
            <h2 class="text-4xl font-bold mb-6">Reflectie</h2>
            <div class="space-y-4 max-w-3xl">
              <p class="text-gray-300 leading-relaxed">
                We kregen de opdracht om de visuele en digitale branding van
                Boris Schmidt te maken. Boris is een Techno Dj en producer. Hij
                studeert aan de Rockacademie van Fontys. Voor zijn
              </p>
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

          <!-- Products Section -->
          <div id="products" class="mb-12">
            <h2 class="text-4xl font-bold mb-6">Producten</h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/projects/branding#product1"
                  class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200 relative group"
                >
                  Product 1
                  <span
                    class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
                  ></span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/projects/branding#product2"
                  class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200 relative group"
                >
                  Product 2
                  <span
                    class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
                  ></span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/branding#product3"
                  class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200 relative group"
                >
                  Product 3
                  <span
                    class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
                  ></span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/branding#product4"
                  class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200 relative group"
                >
                  Product 4
                  <span
                    class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
                  ></span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
