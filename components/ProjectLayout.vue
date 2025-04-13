<template>
  <div class="min-h-screen p-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row mb-10 md:gap-48 gap-10">
        <div class="max-w-2xl">
          <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
          <p class="text-gray-300 mb-10 font-Roboto text-xl">
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
    </div>
  </div>
</template>

<script setup>
const openPdf = ({ pdfUrl }) => {
  if (pdfUrl) {
    window.open(pdfUrl, "_blank");
  }
};
</script>
