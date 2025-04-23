<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Create that UX" subtitle="Cardan" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto">
        <div
          class="max-w-6xl mx-auto flex flex-col items-center justify-center"
        >
          <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10">
            <div class="max-w-2xl mt-8">
              <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
              <p class="text-gray-300 font-Roboto text-xl">
                We kregen de opdracht om de visuele en digitale branding van
                Boris Schmidt te maken. Boris is een Techno Dj en producer. Hij
                studeert aan de Rockacademie van Fontys. Voor zijn Boris is een
                talentvolle DJ en producer aan de Rockacademie van Fontys,
                bekend om zijn melodische techno en energieke beats. Het doel
                was om zowel een jonger publiek aan te spreken als zijn
                bestaande fanbase te behouden. We richtten ons op
                socialmediastrategieën, visuele branding, merchandise en het
                ontwerpen van een nieuwe website om zijn unieke stijl te
                weerspiegelen en verder te ontwikkelen.
              </p>
            </div>
            <div class="max-w-4xl flex justify-center items-center">
              <img
                src="/images/Cardanlogo.svg"
                alt="Cardan logo"
                class="size-64 flex justify-center items-center"
              />
            </div>
          </div>

          <!-- Projectplan -->
          <ContentSection
            id="samenwerking"
            class="scroll-mt-24"
            title="Samenwerkingsovereenkomst"
            subtitle="Learning Outcome 4 Professional Standard"
            description="Voordat we begonnen met het groepsproject heb ik een samenwerkingsovereenkomst gemaakt zodat we regels hadden om ons aan te houden tijdens het werken aan dit project."
            pdfLink="/documents/SamenwerkingsovereenkomstBranding.pdf"
            pdfText="Samenwerkingsovereenkomst"
            :loNumber="4"
          />
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup></script>
