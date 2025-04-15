<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Branding" subtitle="Boris Schmidt" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10">
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
              alt="Boris Schmidt logo"
              class="size-64 flex justify-center items-center"
            />
          </div>
        </div>

        <!-- Samenwerkingsovereenkomst -->
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

        <!-- Onderzoek Boris -->
        <ContentSection
          id="onderzoek"
          class="scroll-mt-24"
          title="Onderzoek Boris"
          subtitle="Learning outcome 1: Interactive Media Products"
          description="Als eerste ben ik gaan kijken op het internet naar informatie over Boris zelf via Google. Wat zijn muziek precies is, wat voor soort muziek hij maakt en welke artiesten hij zelf als inspiratie heeft. Daarnaast heeft hij al veel verschillende sociale media platformen om zijn muziek te delen met de wereld, zoals Soundcloud en Spotify. Ook gebruikt hij Tiktok en Instagram om zijn muziek meer aandacht te laten trekken. Hierdoor kreeg ik een beter beeld van zijn muziek."
          :loNumber="1"
        />

        <!-- Moodboard -->
        <div id="moodboard" class="max-w-3xl mb-10 scroll-mt-24">
          <h1 class="font-RobotoCondensed text-4xl">Moodboard</h1>
          <NuxtLink
            to="/lo1"
            class="text-green-400 mb-2 font-Roboto md:text-2xl text-xl group relative"
          >
            Learning outcome 1: Interactive Media Products
            <!-- Underline Span -->
            <span
              class="absolute left-0 top-7 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
            ></span>
          </NuxtLink>
          <p class="text-gray-300 font-Roboto text-xl">
            Ik heb al wat insides gekregen van het eerste gesprek wat we samen
            met de klas met Boris hebben gehad. Hieruit kwamen deze elementen
            naar voren
          </p>

          <ul class="list-disc list-inside text-gray-300 font-Roboto text-xl">
            <li>Natuur</li>
            <li>Mysterieus</li>
            <li>Donkere warme kleuren</li>
          </ul>

          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Deze elementen ben ik ook gaan gebruiken voor mijn moodboard.
          </p>
          <img
            src="/images/moodboardbranding.png"
            alt="Moodboard"
            class="h-auto max-w-full w-full rounded-lg mb-5"
          />
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            De <span class="underline decoration-purple-400">feedback</span>
            die ik op het moodboard kreeg is dat het erg veel verschillende
            elementen heeft. Ook heeft het alle punten die Boris had verteld uit
            eerdere gesprekken wat hij voor ogen had van het moodboard. Ik heb
            geen Feedpulse van deze feedback gemaakt omdat dit feedback was die
            naar de hele groep was gericht.
          </p>
        </div>

        <!-- Stylescapes -->
        <ContentSection
          id="stylescapes"
          class="scroll-mt-24"
          title="Stylescapes"
          subtitle="Learning outcome 3: Iterative design"
          description="Ik ben opzoek gegaan naar wat artiesten die Boris had aangegeven die hij wel leuk vind. Ik begon met het maken van verschillende stylescapes. Dit was namelijk een van de deliverables. Ik heb in totaal 4 stylescapes gemaakt om een beter beeld te schetsen voor Boris zijn smaak."
          :loNumber="3"
        >
          <!-- Image Slider for Stylescapes -->
          <div class="relative mb-8">
            <div class="overflow-hidden rounded-lg">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                ref="sliderContainer"
              >
                <img
                  v-for="(image, index) in stylescapeImages"
                  :key="index"
                  :src="image"
                  :alt="`Stylescape ${index + 1}`"
                  class="w-full h-auto flex-shrink-0 object-cover"
                />
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center mt-4 gap-2">
              <button
                v-for="(_, index) in stylescapeImages"
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
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            De derde stylescape heeft een hele andere mood dan de andere 3
            stylescapes. Ik wilde namelijk wat verandering en een andere
            richting bekijken die ook mogelijk zou zijn voor een eventuele style
            voor Boris. Ik heb onderzoek gedaan naar
            <span class="underline decoration-purple-400">Crooked Colours</span
            >, een band die ook dezelfde techno muziek maken als Boris zelf. Ik
            heb met Google Image reverse search naar de verschillende plaatjes
            gekeken en deze toegepast op mijn stylescape.
          </p>
          <img
            src="/images/CrookedColours.png"
            alt="Crooked Colours"
            class="h-auto max-w-full w-full rounded-lg mb-5"
          />
        </ContentSection>

        <!-- Logo's -->
        <ContentSection
          id="logo"
          class="scroll-mt-24"
          title="Logo's Boris"
          subtitle="Learning outcome 3: Iterative design"
          description="Na het maken van de stylescapes ben ik begonnen met het ontwerpen van verschillende logo's voor Boris. Ik heb een stuk of 20 verschillende versies gemaakt die passen bij zijn stijl en de sfeer van zijn muziek."
          :loNumber="3"
        >
          <div class="h-auto max-w-full w-full rounded-lg mb-5 mt-2">
            <img
              src="/images/LogoDesignsLuuk.png"
              alt="Boris Schmidt logo white"
              class="h-auto max-w-full w-full rounded-lg"
            />
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Uiteindelijk nadat iedereen van de groep zijn eigen logo's had
            gemaakt gingen we kiezen welke logos wij zelf het beste vonden. Deze
            heb ik aangeduid met de A, B en C. gingen we kiezen welke logos wij
            zelf het beste vonden. Deze heb ik aangeduid met de A, B en C.
          </p>
          <img
            src="/images/abclogo.png"
            alt="top 3 logos"
            class="h-auto max-w-full w-full rounded-lg mb-5"
          />
        </ContentSection>

        <!-- Midterm Powerpoint -->
        <ContentSection
          id="midterm"
          class="scroll-mt-24"
          title="Midterm Powerpoint"
          subtitle="Learning outcome 1: Interactive Media Products"
          description="Iedereen van de groep heeft aan de powerpoint gewerkt. Ik heb samen met Laurens en Zakaria de presentatie gemaakt. Dit was een midterm presentatie. Hiermee wil ik zeggen dat we wat feedback van Boris wilde hebben over hoe onze designs verder moesten gaan."
          :loNumber="1"
          pdfLink="/documents/brandingprojectmidtermpowerpoint.pdf"
          pdfText="Midterm Powerpoint Boris"
        >
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            We hebben het hele gesprek opgenomen zodat we dat later nog konden
            gebruiken voor welke richting we konden opgaan.
          </p>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            De <span class="underline decoration-purple-400">feedback</span> die
            we kregen op de presentatie:
            <span class="italic"
              >"Ik vind logo C, en stylescape 2 het beste. Ik hou van de
              abstracte lijnen en vind de warme kleuren leuk. Ook vind ik logo B
              mooi want die heeft echt zo'n techno vibe en dat techno vibe en
              dat blauwe van stylescape 1 vind ik ook mooi".</span
            >
          </p>
        </ContentSection>

        <!-- Instagram Posts -->
        <ContentSection
          id="instagram"
          class="scroll-mt-24"
          title="Instagram Posts"
          subtitle="Learning outcome 3: Iterative design"
          description="Ik heb twee Instagram posts gemaakt voor Boris. Hierin worden twee covers gebruikt die iemand anders uit mijn groep heeft gemaakt. Deze heb ik dan als mockup gebruikt om de instagram posts te maken."
          :loNumber="3"
        >
          <div class="flex md:flex-row gap-5 flex-col">
            <img
              src="/images/instagram1.png"
              alt="Instagram posts"
              class="h-auto max-w-full w-1/2 rounded-lg mb-5"
            />
            <img
              src="/images/instagram2.png"
              alt="Instagram posts"
              class="h-auto max-w-full w-1/2 rounded-lg mb-5"
            />
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Deze heb ik via canva.com bewerkt in een mockup van een instagram
            post. Daarna heb ik aan Nico gevraagd, iemand van een andere groep
            wat hij er van vond. Nico's opinie: "ik vind het super vet gemaakt,
            als Boris dit product wil hebben is het zeker een toevoeging"
          </p>
        </ContentSection>

        <!-- Linktree -->
        <ContentSection
          id="linktree"
          class="scroll-mt-24"
          title="Linktree"
          subtitle="Learning outcome 3: Iterative design"
          description=" Er zijn twee versies van de Linktree. De eerste versie, versie A is die van mij. Daarna hebben we met de groep ernaar gekeken en hebben we op deze linktree geïtereerd. Dit is versie B. "
          :loNumber="3"
        >
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Boris had als
            <span class="underline decoration-purple-400">feedback</span>
            gegeven dat hij graag zijn linktree zouden willen updaten. Deze heb
            ik daarom ook gedesigned. De linktree heeft de kleuren van de
            Stylescape die we hadden gekozen na zijn feedback in de powerpoint.
          </p>
          <!-- Linktree Slider -->
          <div class="relative mb-8">
            <div class="overflow-hidden rounded-lg">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                ref="linktreeSliderContainer"
              >
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Versie A
                  </h3>
                  <img
                    src="/images/linktree1.png"
                    alt="Linktree versie A"
                    class="h-auto max-w-[600px] w-1/2 rounded-lg mx-auto"
                  />
                </div>
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Versie B
                  </h3>
                  <img
                    src="/images/linktree2.png"
                    alt="Linktree versie B"
                    class="h-auto max-w-[600px] w-1/2 rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center mt-4 gap-2">
              <button
                v-for="(_, index) in 2"
                :key="index"
                @click="currentLinktreeSlide = index"
                class="w-3 h-3 rounded-full transition-colors duration-300"
                :class="
                  currentLinktreeSlide === index
                    ? 'bg-purple-400'
                    : 'bg-gray-400 hover:bg-gray-300'
                "
                :aria-label="`Go to linktree version ${index + 1}`"
              ></button>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevLinktreeSlide"
              class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Previous version"
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
              @click="nextLinktreeSlide"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Next version"
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
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            De iteratie van de linktree is van een combinatie tussen de linktree
            die ik heb gemaakt en de linktree die Laurens heeft gemaakt.
          </p>
        </ContentSection>

        <!-- Spotify Covers -->
        <ContentSection
          id="spotify"
          class="scroll-mt-24"
          title="Spotify Covers"
          subtitle="Learning outcome 3: Iterative design"
          description="ik heb gewerkt aan het maken van nieuwe spotify covers voor Boris. Ik heb deze gemaakt met behulp van AI. Ik heb gebruik gemaakt van DeepAI prompt generator. Hieruit heb ik twee spotify covers gemaakt. Deze heb ik vervolgens gedesigned met behulp van een template die al op Figma stond."
          :loNumber="3"
        >
          <p class="text-gray-300 font-Roboto text-xl">
            De twee covers zijn Woods en Haunted. De elementen die ik in de
            album covers wilde zetten waren:
          </p>
          <ul
            class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5"
          >
            <li>Mysterious</li>
            <li>Dark</li>
            <li>Orange</li>
          </ul>
          <p class="text-gray-300 font-Roboto text-xl">
            Voor woods was de prompt: "generate an image using dark mysterious
            orangeish colors and have it dark."
          </p>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Voor haunted was de prompt: "generate an image using dark mysterious
            dj set, orangeish colors and have it dark and forest."
          </p>

          <!--Versie 1-->
          <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
            Versie 1
          </h3>
          <!-- Spotify Covers Slider Versie 1-->
          <div class="relative mb-8">
            <div class="overflow-hidden rounded-lg">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                ref="spotifyV1SliderContainer"
              >
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Woods
                  </h3>
                  <img
                    src="/images/spotifycoverpre1.png"
                    alt="Spotify cover Woods"
                    class="h-auto max-w-[400px] w-full rounded-lg mx-auto"
                  />
                </div>
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Haunted
                  </h3>
                  <img
                    src="/images/spotifycoverpre2.png"
                    alt="Spotify cover Haunted"
                    class="h-auto max-w-[400px] w-full rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center mt-4 gap-2">
              <button
                v-for="(_, index) in 2"
                :key="index"
                @click="currentSpotifyV1Slide = index"
                class="w-3 h-3 rounded-full transition-colors duration-300"
                :class="
                  currentSpotifyV1Slide === index
                    ? 'bg-purple-400'
                    : 'bg-gray-400 hover:bg-gray-300'
                "
                :aria-label="`Go to spotify cover ${index + 1}`"
              ></button>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevSpotifyV1Slide"
              class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Previous cover"
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
              @click="nextSpotifyV1Slide"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Next cover"
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

          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Deze versie is de eerste versie die ik had gemaakt voor de album
            covers van Spotify. We kwamen er alleen achter na wat feedback van
            Boris dat zijn muziek helemaal geen lyrics bevat. De
            <span class="underline decoration-purple-400"
              >specifieke feedback</span
            >
            was:
            <span class="italic"
              >"Leuke album covers en ik vind ze echt cool hoe ze eruit zien op
              spotify alleen heeft mijn muziek weinig tot geen lyrics dus dat
              kan je weghalen."</span
            >
            Hierdoor heb ik een aanpassing gedaan samen met Laurens en is dat
            aangepast op versie 2.
          </p>

          <!--Versie 2-->
          <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
            Versie 2
          </h3>

          <!-- Spotify Covers Slider Versie 2 -->
          <div class="relative mb-8">
            <div class="overflow-hidden rounded-lg">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                ref="spotifyV2SliderContainer"
              >
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Woods
                  </h3>
                  <img
                    src="/images/spotifycovers1.png"
                    alt="Spotify cover Woods"
                    class="h-auto max-w-[400px] w-full rounded-lg mx-auto"
                  />
                </div>
                <div class="w-full flex-shrink-0">
                  <h3 class="text-2xl font-RobotoCondensed text-white mb-4">
                    Haunted
                  </h3>
                  <img
                    src="/images/spotifycovers2.png"
                    alt="Spotify cover Haunted"
                    class="h-auto max-w-[400px] w-full rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center mt-4 gap-2">
              <button
                v-for="(_, index) in 2"
                :key="index"
                @click="currentSpotifyV2Slide = index"
                class="w-3 h-3 rounded-full transition-colors duration-300"
                :class="
                  currentSpotifyV2Slide === index
                    ? 'bg-purple-400'
                    : 'bg-gray-400 hover:bg-gray-300'
                "
                :aria-label="`Go to spotify cover ${index + 1}`"
              ></button>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevSpotifyV2Slide"
              class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Previous cover"
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
              @click="nextSpotifyV2Slide"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
              aria-label="Next cover"
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
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// Stylescape images array
const stylescapeImages = [
  "/images/StylescapeLuuk1.png",
  "/images/StylescapeLuuk2.png",
  "/images/StylescapeLuuk3.png",
  "/images/StylescapeLuuk4.png",
];

const currentSlide = ref(0);
const sliderContainer = ref(null);

// Linktree slider
const currentLinktreeSlide = ref(0);
const linktreeSliderContainer = ref(null);

// Spotify version 1 slider
const currentSpotifyV1Slide = ref(0);
const spotifyV1SliderContainer = ref(null);

// Spotify version 2 slider
const currentSpotifyV2Slide = ref(0);
const spotifyV2SliderContainer = ref(null);

// Function to go to previous slide
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + stylescapeImages.length) %
    stylescapeImages.length;
};

const prevLinktreeSlide = () => {
  currentLinktreeSlide.value = (currentLinktreeSlide.value - 1 + 2) % 2;
};

const prevSpotifyV1Slide = () => {
  currentSpotifyV1Slide.value = (currentSpotifyV1Slide.value - 1 + 2) % 2;
};

const prevSpotifyV2Slide = () => {
  currentSpotifyV2Slide.value = (currentSpotifyV2Slide.value - 1 + 2) % 2;
};

// Function to go to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % stylescapeImages.length;
};

const nextLinktreeSlide = () => {
  currentLinktreeSlide.value = (currentLinktreeSlide.value + 1) % 2;
};

const nextSpotifyV1Slide = () => {
  currentSpotifyV1Slide.value = (currentSpotifyV1Slide.value + 1) % 2;
};

const nextSpotifyV2Slide = () => {
  currentSpotifyV2Slide.value = (currentSpotifyV2Slide.value + 1) % 2;
};

// Watch for slide changes to update the transform
watch(currentSlide, (newValue) => {
  if (sliderContainer.value) {
    sliderContainer.value.style.transform = `translateX(-${newValue * 100}%)`;
  }
});

watch(currentLinktreeSlide, (newValue) => {
  if (linktreeSliderContainer.value) {
    linktreeSliderContainer.value.style.transform = `translateX(-${
      newValue * 100
    }%)`;
  }
});

watch(currentSpotifyV1Slide, (newValue) => {
  if (spotifyV1SliderContainer.value) {
    spotifyV1SliderContainer.value.style.transform = `translateX(-${
      newValue * 100
    }%)`;
  }
});

watch(currentSpotifyV2Slide, (newValue) => {
  if (spotifyV2SliderContainer.value) {
    spotifyV2SliderContainer.value.style.transform = `translateX(-${
      newValue * 100
    }%)`;
  }
});

// Auto-slide functionality
onMounted(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds

  // Clean up on component unmount
  return () => clearInterval(interval);
});
</script>
