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
              In het projectplan hebben we de volgende dingen beschreven:
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 md:grid md:grid-cols-2 mt-5"
            >
              <li>Aanleiding van het project</li>
              <li>Onderzoeksdoel</li>
              <li>Probleemdefinitie</li>
              <li>Onderzoeksvraag & Deelvragen</li>
              <li>Over de opdrachtgever</li>
              <li>Methodologie</li>
              <li>Planning/Aanpak</li>
              <li>Communicatie/Werkafspraken</li>
              <li>Beperkingen</li>
              <li>Eindproduct</li>
              <li>Deelproduct</li>
            </ul>
          </ContentSection>

          <!-- Research plan -->
          <ContentSection
            id="researchplan"
            class="scroll-mt-24"
            title="Researchplan"
            subtitle="Learning Outcome 4 Professional Standard"
            description="In het researchplan heb ik samen met mijn groep de onderzoeksvragen beantwoord die we eerder bij punt 4 van het projectplan hadden opgesteld."
            pdfLink="/documents/ResearchplanCardan.pdf"
            pdfText="Researchplan"
            :loNumber="4"
          >
            <p class="text-gray-300 font-Roboto text-xl">
              In het eerste gedeelte van het researchplan staan alle
              onderzoeksvragen die we hadden opgesteld. Iedereen van de groep
              moest 3 vragen opstellen. De vragen die ik had opgesteld waren:
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl my-5"
            >
              <li>
                Welke methoden worden gebruikt om de toegankelijkheid van
                websites te testen en in hoeverre houden deze rekening met
                cognitieve beperkingen?
              </li>
              <li>
                Hoe kunnen gebruikers met cognitieve beperkingen betrokken
                worden bij het testen en verbeteren van digitale
                toegankelijkheid?
              </li>
              <li>
                Welke veelvoorkomende fouten maken websites waardoor ze niet
                voldoen aan de WCAG 2.0-richtlijnen?
              </li>
            </ul>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              We hebben daarna al de vragen die we hadden opgesteld
              onderverdeeld in 5 hoofdvragen. Ook hebben we aan deze hoofdvragen
              het
              <span class="underline decoration-purple-400">DOT-framework</span>
              gebruikt.
            </p>
            <p class="text-gray-300 font-Roboto text-xl">
              De vraag die ik ging uitwerken is vraag 5, Wat zijn de grootste
              obstakels die mensen met een beperking ervaren bij het navigeren
              en gebruiken van digitale diensten?
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Deze vraag viel onder de groep van Field / Library in het
              DOT-framework.
            </p>

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ik heb zelf de hoofdvraag weer opgedeeld in 5 delen. er zijn
              namelijk meerdere beperkingen en ik wilde deze graag allemaal in
              kaart hebben.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              het plan was om uiteindelijk alle 5 de groepen een interview te
              doen in een bejaardetehuis. Dit is er helaas niet meer van
              gekomen. Wel heb ik 1 interview kunnen doen met Cedric, een vriend
              van mij die zelf 70% zicht heeft en kleurenblindheid. Dit
              interview is verder beschreven in een kopje hieronder.
            </p>
          </ContentSection>

          <!-- Testplan -->
          <ContentSection
            id="testdoelgroep"
            class="scroll-mt-24"
            title="Test Doelgroep"
            subtitle="Learning Outcome 1 Interactive Media Products"
            description="Om meer te weten te komen hoe iemand met een beperking websites gebruikt, heb ik een test gedaan met Cédric."
            pdfLink="/documents/TestCardan.pdf"
            pdfText="Test Cédric"
            :loNumber="1"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Cédric heeft 70% zicht en is kleurenblind (deuteranomaly). Hij
              gebruikt in het echt natuurlijk gewoon een bril maar wilde voor
              deze test zijn bril wel afdoen om een beter effect te laten zien
              voor het onderzoek.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              In de test heb ik met hem 2 scenario's doorgelopen. In het eerste
              scenario moest hij een handdoek kopen bij de Hema. In de test
              hieronder kan je lezen hoe dat gelopen is.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Het volgende scenario was om een rode stoel te bestellen bij de
              Ikea. Ook deze kan je lezen in het bijgevoegde document.
            </p>

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Om een conclusie te kunnen trekken over deze test is dat
              kleurenblinde mensen meer op textuur van een website letten dan
              daadwerkelijk de kleuren.
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
