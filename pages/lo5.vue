<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Team Roles", to: "/projects/portfolio#teamroles" },
  { text: "16 Personalities", to: "/projects/portfolio#personal" },
  { text: "Toekomstige Plannen", to: "/projects/portfolio#toekomst" },
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
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je neemt het initiatief om feedback te vragen en hierop te
              reflecteren. Je identificeert jouw kernwaarden als basis voor je
              studiecarrière en professionele ontwikkeling."
            </p>
            <h2 class="text-4xl font-bold">Reflectie</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Tijdens de verschillende projecten heb ik samen met mijn groep
                  samenwerkingsovereenkomsten opgesteld. Hierdoor konden we
                  vaststellen wat er gedaan moest worden, wie wat doet en hoe we
                  dit gingen aanpakken.
                </p>

                <p class="text-gray-300 text-xl">
                  Ik vond het in het begin wat raar om op te stellen maar uit
                  eindelijk als er bijvoorbeeld een conflict binnen de groep was
                  hielp dit plan omdat er dan altijd concreet bewijs is van de
                  afspraken die we hadden gemaakt. Zo spraken we bijvoorbeeld af
                  om altijd te melden als je later was of niet kon komen. Ik
                  vind het zelf moeilijk om kritiek te geven maar door dit plan
                  kon ik makkelijker uit mijn woorden komen.
                </p>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Daarnaast maakten we in dezelfde periode een
                  persoonlijkheidstest. Dit was de 16 personalities test waaruit
                  bleek dat ik een Entertainer ben, dit houd in dat ik een
                  extraverte maar leidende persoonlijkheid heb. Ik nodig mensen
                  aan om mee te doen met activiteiten. Deze test gaf mij inzicht
                  in mijn sterke en zwakke punten en wat mijn valkuilen zijn. Ik
                  probeer nu bewuster te zijn met mijn gedrag en hoe ik
                  communiceer met anderen.
                </p>
                <p class="text-gray-300 text-xl">
                  Als laatste vond ik het nog steeds redelijk moeilijk om op een
                  leraar af te stappen en om feedback te vragen. Ik heb dit wel
                  vaker gedaan dan mijn vorige semester en heb ook feedback
                  kunnen verkrijgen op mijn producten maar ik vind dat dit nog
                  steeds verbetering nodig heeft.
                </p>
              </div>
            </div>
          </div>

          <ProductsList :products="products" />
        </div>
      </div>
      <Footer />
      <ScrollToBottom />
    </div>
  </div>
</template>
