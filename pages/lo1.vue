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
  { text: "Test Doelgroep Cardan", to: "/projects/cardan#testdoelgroep" },
  {
    text: "Midterm Powerpoint Cardan",
    to: "/projects/cardan#midtermpowerpoint",
  },
  { text: "Customer Journey Cardan", to: "/projects/cardan#customerjourney" },
  { text: "Onderzoek Project X", to: "/projects/project-x#OnderzoekX" },
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
              "Je oriënteert je op het relevante technologie-, media- en
              ontwerplandschap en creëert interactieve mediaproducten die je
              hebt getest met gebruikers en stakeholders."
            </p>
            <h2 class="text-4xl font-bold">Reflectie</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Dit semester heb ik veel geleerd over interactieve media. Ik
                  heb veel mediaproducten kunnen maken. Ik heb verschillende
                  onderzoeksmethode kunnen ontdekken om mijn doelgroep te
                  omschrijven. Ik heb ook veel verschillende methodes gebruikt
                  denk hierbij aan de verschillende stylescapes bij het project
                  van Branding bij Boris. Hierin heb ik gekeken naar zijn smaak
                  maar ook gekeken naar de smaak van de doelgroep.
                </p>
                <p class="text-gray-300 text-xl">
                  Ik heb ook extra feedback gevraagd aan mijn stakeholders,
                  docenten en groepsgenoten. Zij gaven waardevolle inzichten
                  over hoe ik mijn producten het beste kon vormgeven en
                  verwoorden. Zo heb ik bijvoorbeeld feedback van Bram toegepast
                  door meer kleur toe te voegen. Daarnaast heb ik peerfeedback
                  van klasgenoten en vrienden verwerkt, zoals het gebruik van
                  actieve statements in de footer, zodat je duidelijk kunt zien
                  waar je je bevindt op de website of in de navigatie bar als je
                  op de home pagina bent.
                </p>

                <p class="text-gray-300 text-xl"></p>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Daarnaast heb ik veel verschillende methodes gebruikt om tot
                  mijn producten te komen. Via het internet ben ik gaan kijken
                  naar wat de doelgroep interesseert en wat voor voorbeelden zij
                  hebben om tot hun producten te komen. Ook heb ik gekeken naar
                  hoe bijvoorbeeld material design gemaakt wordt. Hierdoor kwam
                  ik beter tot de conclusie hoe ik mijn producten moest maken.
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
