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
                worden gebruikt in dit project zijn HTML, CSS en JS.
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
          <!-- Products List Section -->
          <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10 w-full">
            <div class="max-w-2xl">
              <ProductsList :products="products" />
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

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Daarnaast hebben ik en Zakaria de taken opgedeeld in twee delen.
              Zakaria was verantwoordelijk voor station 1 en 2 en ik voor
              station 4 en 5. Station 3 was een soort van vliegende keeper. Deze
              heb ik uiteindelijk op me genomen.
            </p>
          </ContentSection>

          <!-- Station 3 Cognitieve Beperking-->
          <ContentSection
            id="cognitievebeperking"
            class="scroll-mt-24"
            title="Station 3 Cognitieve Beperking"
            subtitle="Learning Outcome 2 Development and Version Control"
            description="Dit station is gericht op mensen die te maken hebben met een cognitieve beperking. In dit station heb ik op basis van het design wat we in het design project van Cardan van Jarvin een e-mail formulier gemaakt met allemaal verschillende popups die op een random moment binnen de container oppoppen."
            :loNumber="2"
          >
            <video
              src="/images/station3.mp4"
              muted
              loop
              playsinline
              class="w-full h-auto rounded-lg drop-shadow-black drop-shadow-xl mb-5 auto-play-video"
            ></video>

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Met dit station wordt ervaren hoe het is om ADHD te hebben. Ik heb
              met JavaScript een array gemaakt die verschillende meldingen en
              emoji's oproept en deze daarna op een willekeurige plek binnen de
              container laat zien.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              De code van dit station kan je hier vinden op Github:
            </p>
            <Pdf
              documentLink="https://github.com/LuukyPuuky/Cardan/blob/main/station3.js"
              buttonText="Station 3 Cognitieve Beperking"
            ></Pdf>
          </ContentSection>

          <!-- station 4 Motorische Beperking-->
          <ContentSection
            id="motorischebeperking"
            class="scroll-mt-24"
            title="Station 4 Motorische Beperking"
            subtitle="Learning Outcome 2 Development and Version Control"
            description="Dit station gaat over de motorische beperking. Binnen dit station gaat de gebruiker door een form zijn gegevens invullen. Dit station is iets anders ingericht dan station 3. Namelijk de gebruiker heeft een keuze om twee verschillende games om te spelen om de motorische beperking te ervaren."
            :loNumber="2"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              We beginnen met het eerste spel. In dit spel moet de gebruiker een
              formulier invullen met zijn of haar gegevens, maar er is iets
              bijzonders aan de hand met de muis. De cursor is namelijk erg
              lastig te besturen, omdat er een visuele beperking wordt
              gesimuleerd waarbij de muis willekeurig alle kanten op lijkt te
              bewegen. Omdat het technisch gezien niet legaal is om de muis
              volledig over te nemen in de browser, heb ik dit effect
              gesimuleerd door de cursor onzichtbaar te maken en onverwachte
              bewegingen toe te voegen via JavaScript.
            </p>

            <video
              src="/images/station4game1.mp4"
              muted
              loop
              playsinline
              class="w-full h-auto rounded-lg drop-shadow-black drop-shadow-xl mb-5 auto-play-video"
            ></video>
            <pdf
              documentLink="https://github.com/LuukyPuuky/Cardan/blob/main/station4game1.js"
              buttonText="Station 4 Game 1 Motorische Beperking"
            >
            </pdf>

            <p class="text-gray-300 font-Roboto text-xl mb-5 mt-5">
              Het tweede spel is een spel waarbij de gebruiker moeite heeft om
              te typen. Hiermee wordt gesimuleerd dat je bijvoorbeeld de ziekte
              MS hebt. In dit spel moet de gebruiker zijn gegevens typen, maar
              de letters worden willekeurig vervangen door andere letters. Dit
              maakt het erg moeilijk om de zin correct te typen, wat de
              frustratie van mensen met motorische beperkingen simuleert.
            </p>
            <video
              src="/images/station4game2.mp4"
              muted
              loop
              playsinline
              class="w-full h-auto rounded-lg drop-shadow-black drop-shadow-xl mb-5 auto-play-video"
            ></video>

            <pdf
              documentLink="https://github.com/LuukyPuuky/Cardan/blob/main/station4game2.js"
              buttonText="Station 4 Game 2 Motorische Beperking"
            >
            </pdf>
          </ContentSection>

          <!-- Station 5 Dyslexie -->
          <ContentSection
            id="dyslexie"
            class="scroll-mt-24"
            title="Station 5 Dyslexie"
            subtitle="Learning Outcome 2 Development and Version Control"
            description="Dit station is gericht op mensen die te maken hebben met dyslexie. In dit station heb ik een tekst gemaakt die de gebruiker moet lezen. De tekst is zo gemaakt dat het lijkt alsof de letters door elkaar staan en de gebruiker moeite heeft om de tekst te lezen."
            :loNumber="2"
          >
            <video
              src="/images/station5.mp4"
              muted
              loop
              playsinline
              class="w-full h-auto rounded-lg drop-shadow-black drop-shadow-xl mb-5 auto-play-video"
            ></video>

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ik heb de verschillende vragen gemaakt door middel van een les van
              Frank. In deze les heb ik namelijk geleerd hoe ik verschillende
              data kan genereren met een json file. In de bijgevoegde linkjes
              staan de scenario's en de javascript die ik heb gebruikt om deze
              game te maken.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              De javascript code checkt of er bepaalde woorden in de ingevulde
              tekst staan. Deze worden dan vergelijkt met de mogelijke
              antwoorden die worden op gegeven en daarmee wordt dus de check
              gedaan of het antwoord goed of fout is.
            </p>

            <div class="flex gap-4">
              <Pdf
                documentLink="https://github.com/LuukyPuuky/Cardan/blob/main/scenarios.json"
                buttonText="json scenario's Cardan"
              >
              </Pdf>
              <Pdf
                documentLink="https://github.com/LuukyPuuky/Cardan/blob/main/station5.js"
                buttonText="Station 5 Dyslexie"
              ></Pdf>
            </div>
          </ContentSection>

          <!-- Versie control Github -->

          <!-- Usertest bevindingen -->
          <ContentSection
            id="usertest"
            class="scroll-mt-24"
            title="Usertest bevindingen"
            subtitle="Learning Outcome 3 Iterative Design"
            description="Tijdens dit project heb ik verschillende usertests gedaan om te kijken of de stationen goed werkten en of de gebruikers tegen problemen aanliepen en of er andere bevindingen waren."
            :loNumber="3"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Door deze usertests ben ik erachter gekomen dat er nog geen
              startknop was en dat ik deze heb toegevoegd. Hierdoor kan de
              gebruiker de simulatie starten.
            </p>
            <img
              src="/images/startknop.png"
              alt="startknop"
              class="mb-5 rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <div class="flex flex-col gap-4 w-max">
              <Pdf
                documentLink="/documents/UsertestVragenStation3.pdf"
                buttonText="Usertest Station 3 Cognitieve Beperking"
              ></Pdf>
              <Pdf
                documentLink="/documents/UsertestVragenStation4.pdf"
                buttonText="Usertest Station 4 Motorische Beperking"
              ></Pdf>
              <Pdf
                class="w-max"
                documentLink="/documents/UsertestVragenStation5.pdf"
                buttonText="Usertest Station 5 Dyslexie"
              ></Pdf>
            </div>
            <p class="text-gray-300 font-Roboto text-xl mb-5 mt-5">
              Ik heb nog meer feedback / een iteratie gekregen op het design
              maar dit ga ik in het kopje hieronder van de presentatie benoemen.
            </p>
          </ContentSection>

          <!-- Eindpresentatie -->
          <ContentSection
            id="eindpresentatiedev"
            class="scroll-mt-24"
            title="Eind Presentatie"
            subtitle="Learning Outcome 1 Interactive Media Products"
            description="Voor dit project heb ik een presentatie gemaakt waarin ik het project heb gepresenteerd. In deze presentatie heb ik het project uitgelegd en de verschillende stationen laten zien in de demo."
            :loNumber="1"
            pdfLink="/documents/DevelopmentEindPresentatie.pdf"
            pdfText="Eind Presentatie"
          >
            <img
              src="/images/eindppdev.png"
              alt="eindpresentatie development"
              class="mb-5 rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ik heb tijdens de powerpoint presentatie feedback gekregen van de
              stakeholder als van Frank en Anke. Daarnaast hebben we als groep
              ook nog feedback gekregen van twee mede studenten.
            </p>
            <p class="text-white font-Roboto text-xl mb-5">
              De
              <span class="underline decoration-purple-400">feedback</span> die
              we kregen van de studenten was:
            </p>

            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 mt-5"
            >
              <li>
                Homepagina laat niet duidelijk zien waar je op moet klikken.
              </li>
              <li>Bij kokervisie was de handdoek snel vindbaar.</li>
              <li>
                Positief punt, alle stationen lijken op elkaar qua design.
              </li>
            </ul>

            <p class="text-white font-Roboto text-xl mb-5">
              De
              <span class="underline decoration-purple-400">feedback</span> die
              we kregen van de leraren en de stakeholder was:
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 mt-5"
            >
              <li>Bij station 1 kan de legenda weg.</li>
              <li>
                Bij station 1 kan je het meer op een echte bioscoop laten lijken
                met een scherm.
              </li>
              <li>
                Bij station 2 kan de standaard normale video weg. Is niet nodig
                voor de ervaring.
              </li>
              <li>
                Op de homepagina een grote CTA knop toevoegen zodat de gebruiker
                direct weet wat er nieuw is en hierdoor sneller naar het nieuwe
                ervaringsplein gaat.
              </li>
              <li>
                De flow van alle stationen is goed. Je skipt door alles goed
                heen.
              </li>
            </ul>

            <p class="text-white font-Roboto text-xl mb-5">
              De
              <span class="underline decoration-purple-400">feedback</span> die
              ik specifiek kreeg van Frank voor development was:
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 mt-5"
            >
              <li>
                Bij alle stationen kan je het beste voordat je op de start knop
                klikt de game helemaal op display: none zetten. Dit zorgt voor
                minder afleiding en dan slaat de gebruiker ook niet de knop
                over.
              </li>
              <li>
                Nog een aanbeveling is om alle stationen te testen met mensen
                die bijvoorbeeld echt dyslexie hebben. Hierdoor kan je testen
                met experts.
              </li>
            </ul>
          </ContentSection>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup>
const products = [
  { text: "Project plan", to: "/projects/development#projectplandev" },
  {
    text: "Station 4 Motorische Beperking",
    to: "/projects/development#motorischebeperking",
  },
  {
    text: "Station 3 Cognitieve Beperking",
    to: "/projects/development#cognitievebeperking",
  },
  { text: "Station 5 Dyslexie", to: "/projects/development#dyslexie" },
  { text: "Usertest bevindingen", to: "/projects/development#usertest" },
  {
    text: "Eind Presentatie",
    to: "/projects/development#eindpresentatiedev",
  },
];

import { ref, onMounted, onUnmounted } from "vue";

let observer = null;

onMounted(() => {
  // Find all videos with the auto-play-video class
  const videos = document.querySelectorAll(".auto-play-video");

  if (videos.length > 0) {
    // Create intersection observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport, start playing
            entry.target.play().catch(console.error);
          } else {
            // Video is out of viewport, pause it
            entry.target.pause();
          }
        });
      },
      {
        // Trigger when 50% of the video is visible
        threshold: 0.5,
      }
    );

    // Observe all videos
    videos.forEach((video) => {
      observer.observe(video);
    });
  }
});

onUnmounted(() => {
  // Clean up observer when component is destroyed
  if (observer) {
    observer.disconnect();
  }
});
</script>
