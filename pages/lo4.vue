<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  {
    text: "Samenwerkingsovereenkomst Boris",
    to: "/projects/branding#samenwerking",
  },
  {
    text: "Communicatie Stakeholder Boris",
    to: "/projects/branding#communicatie",
  },
  { text: "Eind Presentatie Boris", to: "/projects/branding#eindpp" },
  { text: "Projectplan Cardan", to: "/projects/cardan#projectplan" },
  { text: "Researchplan Cardan", to: "/projects/cardan#researchplan" },
  { text: "Eind Powerpoint Cardan", to: "/projects/cardan#eindpowerpoint" },
  {
    text: "Projectplan Development",
    to: "/projects/development#projectplandev",
  },

  {
    text: "Eind Powerpoint Development",
    to: "/projects/development#eindpresentatiedev",
  },
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Ik heb dit semester veel gewerkt aan mijn contact met mijn
                  stakeholders en het contact met mijn leraren en groepsgenoten.
                  Ik ben bij het eerste project, Project branding degene geweest
                  die het contact met Boris bleef houden. Hiermee ben ik het
                  directe aanspreekpunt geweest van mijn groep en de
                  stakeholder.
                </p>
                <p class="text-gray-300 text-xl">
                  ook heb ik bij alle projecten een projectplan opgesteld samen
                  met mijn groepsgenoten. Hierin hebben we alle taken beschreven
                  en hebben we afspraken gemaakt zodat we allemaal wisten wat we
                  moesten doen. Dit heeft ervoor gezorgd dat we goed konden
                  samenwerken en dat we elkaar konden helpen waar nodig.
                </p>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Bij het eerste project, Branding heb ik veel contact gehad met
                  de stakeholder maar bij het tweede project, Create that UX,
                  Cardan heb ik wat minder contact gehad naast de geregelde
                  contact momenten van school. Ik denk dat we een beter product
                  hadden kunnen neerzetten als ik of wij als groep wat meer
                  contact hadden met de stakeholder.
                </p>
                <p class="text-gray-300 text-xl">
                  Op het gebied van verkennend onderzoek heb ik verschillende
                  methodes toegepast om de doelgroep van de stakeholders te
                  onderzoeken. Zo heb ik veel usertests uitgevoerd waardoor er
                  belangrijke veranderingen in mijn projecten werden toegepast.
                  Hierdoor heb ik ook goed kunnen aantonen wat mijn
                  ontwerpkeuzes zijn.
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
