<template>
  <div class="w-full bg-gray-900 text-white py-10">
    <div class="container mx-auto px-4">
      <!-- Reflection Section -->
      <div id="reflection" class="mb-12">
        <h2 class="text-4xl font-bold mb-6">Reflectie</h2>
        <div class="space-y-4 max-w-3xl">
          <p class="text-gray-300 leading-relaxed">
            We kregen de opdracht om de visuele en digitale branding van Boris
            Schmidt te maken. Boris is een Techno Dj en producer. Hij studeert
            aan de Rockacademie van Fontys. Voor zijn
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
        <ul class="space-y-3">
          <li>
            <NuxtLink
              to="/projects/branding#product1"
              class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200"
            >
              Product 1
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projects/branding#product2"
              class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200"
            >
              Product 2
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/branding#product3"
              class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200"
            >
              Product 3
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/branding#product4"
              class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200"
            >
              Product 4
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
