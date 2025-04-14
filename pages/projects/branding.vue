<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Branding" subtitle="Boris Schmidt" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto">
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

        <ContentSection
          title="Samenwerkingsovereenkomst"
          subtitle="Learning Outcome 4 Professional Standard"
          description="Voordat we begonnen met het groepsproject heb ik een samenwerkingsovereenkomst gemaakt zodat we regels hadden om ons aan te houden tijdens het werken aan dit project."
          pdfLink="/documents/samenwerkingsovereenkomst.pdf"
          pdfText="Samenwerkingsovereenkomst"
        />

        <ContentSection
          title="Onderzoek Boris"
          subtitle="Learning outcome 3: Iterative design"
          description="Als eerste ben ik gaan kijken op het internet naar informatie over Boris zelf via Google. Wat zijn muziek precies is, wat voor soort muziek hij maakt en welke artiesten hij zelf als inspiratie heeft. Daarnaast heeft hij al veel verschillende sociale media platformen om zijn muziek te delen met de wereld, zoals Soundcloud en Spotify. Ook gebruikt hij Tiktok en Instagram om zijn muziek meer aandacht te laten trekken. Hierdoor kreeg ik een beter beeld van zijn muziek."
        />

        <div class="max-w-2xl mb-10">
          <h1 class="font-RobotoCondensed text-4xl">Moodboard</h1>
          <h2 class="font-RobotoCondensed text-2xl text-green-500 mb-2">
            Learning outcome 1: Interactive Media Products
          </h2>
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
          <Pdf />
        </div>

        <ContentSection
          title="Stylescapes"
          subtitle="Learning outcome 3: Iterative design"
          description="Ik ben opzoek gegaan naar wat artiesten die Boris had aangegeven die hij wel leuk vind. Ik begon met het maken van verschillende stylescapes. Dit was namelijk een van de deliverables. Ik heb in totaal 4 stylescapes gemaakt om een beter beeld te schetsen voor Boris zijn smaak."
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

// Function to go to previous slide
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + stylescapeImages.length) %
    stylescapeImages.length;
};

// Function to go to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % stylescapeImages.length;
};

// Watch for slide changes to update the transform
watch(currentSlide, (newValue) => {
  if (sliderContainer.value) {
    sliderContainer.value.style.transform = `translateX(-${newValue * 100}%)`;
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
