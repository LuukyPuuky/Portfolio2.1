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
            <!--Introductie content-->
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
          <div class="flex max-w-6xl mx-auto">
            <ProductsList :products="products" />
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
              gekomen. Wel heb ik 1 interview kunnen doen met Cédric, een vriend
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
            pdfText="Test Doelgroep"
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

          <!-- Midterm powerpoint Cardan -->
          <ContentSection
            id="midtermpowerpoint"
            class="scroll-mt-24"
            title="Midterm Powerpoint"
            subtitle="Learning Outcome 1 Interactive Media Products"
            description="Samen met de groep hebben we de eerste sprint oplevering gehad. Hierin hebben we een powerpoint gemaakt waarin we alles wat we tot nu toe hebben gedaan hebben beschreven. "
            pdfLink="/documents/Cardanmidtermpp.pdf"
            pdfText="Midterm Powerpoint"
            :loNumber="1"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ook kregen we natuurlijk feedback op de powerpoint en wat we
              allemaal hebben laten zien. De
              <span class="underline decoration-purple-400">feedback</span> die
              we kregen van Carolina was:
            </p>
            <p class="italic text-gray-300 font-Roboto text-xl mb-5">
              "Het was niet helemaal duidelijk hoe de vragen zijn in het
              ervaringsplein waren. Hoe erg wil je in het speelse gaan en in het
              serieuze wil gaan? Welke kant wil je liever op gaan?" "Het spel
              met de bom voor kleurenblindheid: Bom onschadelijk maken naar
              situatie verbeteren naar wat iemand echt kan tegen komen. Echte
              situaties maken. Het spel is wel leuk. Maar veranderen Echte
              situaties maken. Het spel is wel leuk. Maar veranderen naar
              dagelijkse activiteiten." "Het design is iets te druk met te veel
              tekst. Probeer hier op te verbeteren"
            </p>

            <img
              src="/images/midtermppcardan.png"
              alt="midterm powerpoint cardan"
              class="mb-5 rounded-lg drop-shadow-black drop-shadow-xl"
            />
          </ContentSection>

          <!-- Motorische Beperking Design Process -->
          <ContentSection
            id="designproces"
            class="scroll-mt-24"
            title="Figma Design Proces"
            subtitle="Learning Outcome 3 Iterative Design"
            description="In dit gedeelte heb ik mijn design proces gemaakt. Ik heb in totaal 3 versies gemaakt van mijn station. 2 daarvan zijn iteraties van feedback op het design. Iedereen van  de groep had zijn eigen station gekozen om te gaan ontwerpen. "
            :loNumber="3"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              De eerste versie was mijn gedachte van hoe ik dacht mijn station
              er uit zou laten zien. Daarna ben ik doorgegaan met een iteratie
              van deze versie. Op basis van
              <span class="underline decoration-purple-400">feedback</span> van
              peers uit de klas
              <span class="italic"
                >"Zorg dat er bij elk station een samenhang is in design.
                Hierdoor zijn het niet allemaal aparte stations maar zorg je
                voor een geheel"</span
              >
              Hierdoor is uiteindelijk versie 2 uitgerold.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              De laatste versie en dus een iteratie op versie 2. Ik heb een
              Usertest heb uitgevoerd op deze versie. We hadden namelijk
              gevraagd hoe de indeling van de vragen ten opzichte van het spel
              moesten plaatsen. Deze usertest is hieronder te vinden in de
              volgende alinea.
            </p>
            <div class="relative mb-8">
              <div class="overflow-hidden rounded-lg">
                <div
                  class="flex transition-transform duration-500 ease-in-out"
                  ref="sliderContainer"
                >
                  <img
                    v-for="(image, index) in designProcesImages"
                    :key="index"
                    :src="image"
                    :alt="`DesignProces ${index + 1}`"
                    class="w-full h-auto flex-shrink-0 object-fit drop-shadow-black drop-shadow-xl"
                  />
                </div>
              </div>

              <!-- Navigation Dots -->
              <div class="flex justify-center mt-4 gap-2">
                <button
                  v-for="(_, index) in designProcesImages"
                  :key="index"
                  @click="currentSlide = index"
                  class="w-3 h-3 rounded-full transition-colors duration-300"
                  :class="
                    currentSlide === index
                      ? 'bg-purple-400'
                      : 'bg-gray-400 hover:bg-gray-300'
                  "
                  :aria-label="`Go to slidescape ${index + 1}`"
                ></button>
              </div>

              <!-- Navigation Arrows -->
              <button
                @click="prevSlide"
                class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                @click="nextSlide"
                class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </ContentSection>

          <ContentSection
            id="UsertestCardanDesign"
            class="scroll-mt-24"
            title="Usertest Design Iteratie"
            subtitle="Learning Outcome 3 Iterative Design"
            description="Ik heb een Usertest gedaan met studenten van Fontys ICT om te bepalen welke versie van het design zij het beste vonden. De usertest bestond uit een A-B test. In deze A-B test konden de studenten kiezen welke ze het het mooiste oogde en de reden waarom dat het beste oogden."
            :loNumber="3"
          >
          </ContentSection>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// designProcesImages array
const designProcesImages = [
  "/images/versie1moto.png",
  "/images/versie2moto.png",
  "/images/versie3moto.png",
];

const currentSlide = ref(0);
const sliderContainer = ref(null);

// Function to go to previous slide
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + designProcesImages.length) %
    designProcesImages.length;
};

// Function to go to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % designProcesImages.length;
};

// Watch for slide changes to update the transform
watch(currentSlide, (newValue) => {
  if (sliderContainer.value) {
    sliderContainer.value.style.transform = `translateX(-${newValue * 100}%)`;
  }
});

import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Onderzoek Boris", to: "/projects/branding#onderzoek" },
  { text: "Moodboard Boris", to: "/projects/branding#moodboard" },
  { text: "Midterm Powerpoint Boris", to: "/projects/branding#midterm" },
  { text: "Brandguide Boris", to: "/projects/branding#brandguide" },
  {
    text: "Content Strategie Boris",
    to: "/projects/branding#contentstrategie",
  },
  { text: "Test Doelgroep Cardan", to: "/projects/cardan#testdoelgroep" },
  {
    text: "Midterm Powerpoint Cardan",
    to: "/projects/cardan#midtermpowerpoint",
  },
];
</script>
