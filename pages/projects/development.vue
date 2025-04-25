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

          <!--Station 1 Visuele Beperking-->
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup></script>
