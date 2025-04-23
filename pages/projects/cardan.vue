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
                Cardan heeft ons gevraagd om hun Ervaringsplein te
                digitaliseren. Momenteel maken zij gebruik van fysieke
                apparaten, zoals brillen die een visuele beperking simuleren en
                een knop waarmee blinde gebruikers websites kunnen navigeren.
                Met deze fysieke hulpmiddelen test Cardan verschillende websites
                en apps op naleving van de WCAG-richtlijnen. De uitdaging voor
                ons is om deze functionaliteit digitaal beschikbaar te maken in
                de vorm van een simulatie-tool.
              </p>
            </div>
            <div class="max-w-4xl flex justify-center items-center">
              <img
                src="/images/Cardanlogo.svg"
                alt="Cardan logo"
                class="flex justify-center items-center size-72"
              />
            </div>
          </div>

          <!-- Projectplan -->
          <ContentSection
            id="projectplan"
            class="scroll-mt-24"
            title="Projectplan"
            subtitle="Learning Outcome 4 Professional Standard"
            description="Voordat we aan het groepsproject begonnen, heb ik samen met mijn groep een projectplan opgesteld. Hiermee konden we duidelijk en gestructureerd plannen wat we wilden maken voor de stakeholder."
            pdfLink="/documents/ProjectplanCardan.pdf"
            pdfText="Projectplan"
            :loNumber="4"
          >
            <p class="text-gray-300 font-Roboto text-xl">
              Daarnaast hebben we een onderzoeksdoel en een probleemdefinitie
              geformuleerd.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ook hebben we in het projectplan andere onderdelen opgenomen,
              zoals een Trello-bord voor het bijhouden van onze voortgang.
            </p>
          </ContentSection>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup></script>
