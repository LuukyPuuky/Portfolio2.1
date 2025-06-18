<script setup lang="ts">
const products = [
  {
    text: "Leeruitkomsten Slider Portfolio",
    to: "/projects/portfolio#leeruitkomsten",
  },
  {
    text: "Projecten Map Slider Portfolio",
    to: "/projects/portfolio#mapslider",
  },
  {
    text: "Versie Control Github Portfolio",
    to: "/projects/portfolio#versioncontrolportfolio",
  },
  {
    text: "Station 3 Cognitieve Beperking Development",
    to: "/projects/development#cognitievebeperking",
  },
  {
    text: "Station 4 Motorische Beperking Development",
    to: "/projects/development#motorischebeperking",
  },

  {
    text: "Station 5 Dyslexie Development",
    to: "/projects/development#dyslexie",
  },
  {
    text: "Development X",
    to: "/projects/project-x#DevelopmentX",
  },
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Ik denk dat ik zelf goed op weg ben gegaan met development dit
                  semester. Ik wilde namelijk vorig semester al beginnen met een
                  framework genaamd Astro. Echter ben ik nu over gestapt naar
                  Nuxt en dus Vue. Ik heb ook Tailwind erin gegooid omdat ik dit
                  in mijn vorige semester heb geleerd hoe ik dat moet gebruiken.
                </p>
                <p class="text-gray-300 text-xl">
                  De reden achter deze keuze is dat frameworks veel gebruikt
                  worden in het bedrijfsleven en het is dan ook goed om dit te
                  kunnen gebruiken en daardoor ook meer op kan oefenen om dit te
                  gebruiken. Hiermee laat ik mijn skills zien voor toekomstige
                  stageplekken.
                </p>
                <p class="text-gray-300 text-xl">
                  Ik vond het op het begin zeker moeilijk om een framework te
                  leren daarom heb ik wel meerdere maals youtube videos bekeken
                  en natuurlijk verschillende dingen geoefend. Ook was het wel
                  lastig om GSAP te leren. Ik wist namelijk al dat ik dit graag
                  wilde toevoegen aan mijn website zie ook de
                  <span class="underline decoration-purple-400">producten</span>
                  hieronder.
                </p>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  GSAP is een animatie library die ik heb gebruikt om dus de
                  verschillende animaties te maken. Dit is een library die ik
                  heb gebruikt om de scroll animaties te maken.
                </p>
                <p class="text-gray-300 text-xl">
                  Ik heb ook gebruikt gemaakt van een library genaamd
                  ScrollTrigger. Dit is een library die ik heb gebruikt om de
                  scroll animaties te maken.
                </p>
                <p class="text-gray-300 text-xl">
                  Daarnaast heb ik veel geleerd van Laurens, Laurens weet
                  namelijk al veel van frameworks door zijn eerdere opleiding
                  van het MBO. Hierdoor kon ik hem vragen stellen wanneer ik
                  moeite had met het werken met het framework.
                </p>
                <p class="text-gray-300 text-xl">
                  Ik heb ook gebruik gemaakt van Github voor het versiebeheer.
                  Ik heb gekozen voor Github omdat ik het fijner vind om hiermee
                  te werken. Ik kan namelijk dan ook Github Desktop gebruiken
                  wat ik zelf erg chill vind. Dit mocht van Frank.
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
