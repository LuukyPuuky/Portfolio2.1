<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Portfolio" subtitle="Luuk Steijaert" />
      <div class="min-h-screen p-4">
        <div class="max-w-6xl mx-auto">
          <ContentSection
            title="Team Roles"
            id="teamroles"
            class="scroll-mt-24"
            subtitle="Learning outcome 5 Personal Leadership"
            description=" Tijdens een workshop van Guido hebben we met onze groep verschillende
        rollen bepaald volgens de Theorie van Belbin. Deze heb ik aangewezen bij
        mezelf en bij mijn teamgenoten. Ook heb ik beschreven waarom deze rollen
        bij mij passen en waarom deze rollen bij mijn teamgenoten passen."
            pdfLink="/documents/TeamrollenS2.1.pdf"
            pdfText="Team Roles"
            :loNumber="5"
          >
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl">
              Hieronder zijn de teamrolles te zien die ik heb aangewezen bij
              mezelf en bij mijn teamgenoten. In het PDF hieronder wordt meer
              beschreven wat er besproken is in het overleg.
            </p>
            <img
              class="h-auto max-w-full w-1/2 rounded-lg mb-5 mt-2"
              src="/images/teamroles.png"
              alt="Team roles"
            />
          </ContentSection>

          <ContentSection
            title="16 Personalities"
            id="personal"
            class="scroll-mt-24"
            subtitle="Learning outcome 5 Personal Leadership"
            description="De 16 Personalities test is een test die ik heb gedaan tijdens een workshop van Guido. Hierin ben ik erachter gekomen wat mijn eigen kernwaardes zijn, Welke kernwaardes andere van mij vinden en wat voor persoon ik zelf ben. De test wordt gebruikt om te bepalen wat voor soort persoon ik ben. Hiermee kan je namelijk beter bepalen hoe je ligt met andere mensen binnen de groep. Ook kan je hieruit afleiden wat voor persoon ik ben en wat voor persoon andere mensen binnen de groep zijn."
            pdfLink="/documents/personalities.pdf"
            pdfText="16 Personalities"
            :loNumber="5"
          >
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl">
              Hieronder zijn de resultaten van de test te zien. In het PDF
              hieronder wordt meer beschreven wat er besproken is in het
              overleg.
            </p>
            <img
              class="h-auto max-w-full w-1/2 rounded-lg mb-5 mt-2"
              src="/images/16personalities.png"
              alt="16 personallities result"
            />
          </ContentSection>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
