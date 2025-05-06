<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Development" subtitle="Cardan" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto">
        <div
          class="max-w-6xl mx-auto flex flex-col items-center justify-center"
        >
          <div
            class="flex flex-col md:flex-row md:mb-22 mb-10 md:gap-48 gap-10"
          >
            <div class="max-w-2xl mt-8">
              <h1 class="font-RobotoCondensed text-4xl mt-10">Introductie</h1>
              <p class="text-gray-300 font-Roboto text-xl">
                In dit project ga ik samen met mijn groepsgenoot Zakaria werken
                aan het coderen van het design wat we als groepproject hadden
                gemaakt voor Cardan. We hebben verschillende stationen
                gecodeerd. Elk station heeft een eigen beperking die wordt
                beschreven en uitgewerkt doormiddel van Javascript. De talen die
                worden gebruikt in dit project zijn HTML, CSS, JS en PHP.
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
            id="projectplandev"
            class="scroll-mt-24"
            title="Projectplan"
            subtitle="Learning Outcome 4 Professional Standard"
            description="Voordat we kunnen beginnen met het project heb ik samen met Zakaria een projectplan opgezet zodat we precies weten wat we in het project wilde neerzetten. Hierin staat hoe we het project hebben opgezet en hoe we het project willen inrichten."
            pdfLink="/documents/ProjectplancodeCardan.pdf"
            pdfText="Projectplan"
            :loNumber="4"
          >
            <p class="text-gray-300 font-Roboto text-xl">
              In het projectplan hebben we de volgende dingen beschreven:
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 md:grid md:grid-cols-2 mt-5"
            >
              <li>Aanleiding van het project</li>
              <li>Onderzoeksdoel</li>
              <li>Probleemdefinitie</li>
              <li>Git & Codepraktijken</li>
              <li>Over de opdrachtgever</li>
              <li>Planning</li>
              <li>Communicatie/Werkafspraken</li>
              <li>Beperkingen</li>
              <li>Eindproduct</li>
            </ul>
          </ContentSection>

          <!-- station 4 Motorische Beperking-->
          <ContentSection
            id="motorischebeperking"
            class="scroll-mt-24"
            title="Station 4 Motorische Beperking"
            subtitle="Learning Outcome 2 Development and Version Control"
            description="Dit station gaat over de motorische beperking. Binnen dit station gaat de gebruiker door een form zijn gegevens invullen. Hierbij zal hij twee verschillende challenges krijgen."
            :loNumber="2"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              De eerste challenge is dat de gebruiker terecht komt bij dat zijn
              muis alle kanten op beweegt. Dit is helaas niet heel makkelijk om
              te coderen omdat je de muis officieel legaal niet mag overnemen
              binnen de browser.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Naast deze challenge heeft de gebruiker nog een andere challenge
              binnen dit station en dat is dat tijdens het typen van de letters
              op hun toetsenbord af en toe per ongeluk een random letter
              intypen.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Hieronder is een video hoe het er uit ziet.
            </p>
            <video src=""></video>
          </ContentSection>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup></script>
