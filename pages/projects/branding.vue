<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Branding" subtitle="Boris Schmidt" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row mb-10 md:gap-48 gap-10">
          <div class="max-w-2xl mt-8">
            <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl">
              We kregen de opdracht om de visuele en digitale branding van Boris
              Schmidt te maken. Boris is een Techno Dj en producer. Hij studeert
              aan de Rockacademie van Fontys. Voor zijn Boris is een talentvolle
              DJ en producer aan de Rockacademie van Fontys, bekend om zijn
              melodische techno en energieke beats. Het doel was om zowel een
              jonger publiek aan te spreken als zijn bestaande fanbase te
              behouden. We richtten ons op socialmediastrategieën, visuele
              branding, merchandise en het ontwerpen van een nieuwe website om
              zijn unieke stijl te weerspiegelen en verder te ontwikkelen.
            </p>
          </div>
          <div class="max-w-4xl flex justify-center items-center">
            <img
              src="/images/Bs-white.svg"
              alt="Boris Schmidt logo
          "
              class="size-64 flex justify-center items-center"
            />
          </div>
        </div>

        <learning-card
          id="product1"
          title="Samenwerkingsovereenkomst"
          subtitle="Learning Outcome 4 Professional Standard"
          description="Voordat we begonnen met het groepsproject heb ik een samenwerkingsovereenkomst gemaakt zodat we regels hadden om ons aan te houden tijdens het werken aan dit project."
        />

        <learning-card
          id="product2"
          title="Onderzoek Boris"
          subtitle="Learning outcome 3: Iterative design"
          description="Als eerste ben ik gaan kijken op het internet naar informatie over Boris zelf via Google. Wat zijn muziek precies is, wat voor soort muziek hij maakt en welke artiesten hij zelf als inspiratie heeft. Daarnaast heeft hij al veel verschillende sociale media platformen om zijn muziek te delen met de wereld, zoals Soundcloud en Spotify. Ook gebruikt hij Tiktok en Instagram om zijn muziek meer aandacht te laten trekken. Hierdoor kreeg ik een beter beeld van zijn muziek. "
        />

        <div class="max-w-2xl mt-8 mb-10">
          <h1 class="font-RobotoCondensed text-4xl">Moodboard</h1>
          <h2 class="font-RobotoCondensed text-2xl text-green-500 mb-2">
            Learning outcome 1: Interactive Media Products
          </h2>
          <p class="text-gray-300 font-Roboto text-xl">
            Ook heb ik al wat insides gekregen van het eerste gesprek wat we
            samen met de klas met Boris hebben gehad. Hieruit kwamen deze
            elementen naar voren <br />
            <ul class="list-disc list-inside text-gray-300 font-Roboto text-xl">
              <li>Natuur</li>
              <li>Mysterieus</li>
              <li>Donkere warme kleuren</li>
            </ul>
          </p>
          <p class="text-gray-300 font-Roboto text-xl mb-10">
            Deze elementen ben ik ook gaan gebruiken voor mijn moodboard.
          </p>
          <img
            src="/images/moodboardbranding.png"
            alt="Moodboard"
            class="h-auto max-w-full  w-full"
          />
        </div>
        <Pdf />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup></script>
