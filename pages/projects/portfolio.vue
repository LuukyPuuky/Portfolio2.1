<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Portfolio" subtitle="Luuk Steijaert" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10">
          <div class="max-w-2xl mt-8">
            <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl">
              In dit project beschrijf ik wat ik voor proces heb gedaan om tot
              stand te komen voor mijn portfolio. Dit is het portfolio wat je nu
              aan het bekijken bent.
            </p>
          </div>
          <div class="max-w-4xl flex justify-center items-center">
            <img
              src="/images/boulderholds.png"
              alt="Bolderholds"
              class="size-64 flex justify-center items-center"
            />
          </div>
        </div>
        <!-- Products List Section -->
        <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10 w-full">
          <div class="max-w-2xl">
            <ProductsList :products="products" />
          </div>
        </div>
        <div class="max-w-6xl mx-auto">
          <!-- Design Proces -->

          <ContentSection
            title="Design Proces"
            id="designproces"
            class="scroll-mt-24"
            subtitle="Learning outcome 3 Iterative Design"
            description="Het design proces van mijn portfolio is begonnen met het maken van een moodboard. Hierin heb ik verschillende websites bekeken en gekeken naar de kleuren, de layout en de verschillende elementen die zij gebruiken. Ik heb dit gedaan om inspiratie op te doen voor mijn eigen portfolio."
            :loNumber="3"
          >
            <img
              class="h-auto max-w-full rounded-lg mb-5 mt-2"
              src="/images/Moodboard2.png"
              alt="moodboard"
            />
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Hieronder zijn de websites waarvan ik inspiratie heb op gedaan op
              het gebied van kleur en layout.
            </p>
            <img
              class="h-auto max-w-full rounded-lg mb-5 mt-2"
              src="/images/inspiratie.png"
              alt="inspiratie"
            />
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Hierna ben ik gaan kijken naar de verschillende elementen die ik
              wilde gebruiken in mijn portfolio. Ik heb dit gedaan door middel
              van een wireframe. Hierin heb ik de verschillende elementen
              geplaatst en gekeken naar de layout van mijn portfolio.
            </p>

            <!-- Image Slider for Wireframes -->
            <div class="relative mb-8 mx-auto w-2/3">
              <div class="overflow-hidden rounded-lg">
                <div
                  class="flex transition-transform duration-500 ease-in-out"
                  ref="wireframeSliderContainer"
                >
                  <img
                    v-for="(image, index) in wireframeImages"
                    :key="index"
                    :src="image"
                    :alt="`Wireframe ${index + 1}`"
                    class="w-full h-auto flex-shrink-0 object-cover"
                  />
                </div>
              </div>

              <!-- Navigation Dots -->
              <div class="flex justify-center mt-4 gap-2">
                <button
                  v-for="(_, index) in wireframeImages"
                  :key="index"
                  @click="currentWireframeSlide = index"
                  class="w-3 h-3 rounded-full transition-colors duration-300"
                  :class="
                    currentWireframeSlide === index
                      ? 'bg-purple-400'
                      : 'bg-gray-400 hover:bg-gray-300'
                  "
                  :aria-label="`Go to wireframe ${index + 1}`"
                ></button>
              </div>

              <!-- Navigation Arrows -->
              <button
                @click="prevWireframeSlide"
                class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Previous wireframe"
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
                @click="nextWireframeSlide"
                class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Next wireframe"
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

            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Na deze wireframes heb ik ook gekeken naar hoe het zou zijn om de
              wireframe in de kleuren te hebben die ik wilde gaan gebruiken.
            </p>
            <div class="flex justify-center items-center">
              <img
                class="h-auto max-w-full w-1/2 rounded-lg mb-5 mt-2 border"
                src="/images/Kleurwireframe.png"
                alt="lettertypes"
              />
            </div>

            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Ik heb drie verschillende lettertypes gebruikt in mijn portfolio.
              Dit zijn Roboto, Roboto Condensed en Krona One. Deze lettertypes
              heb ik gekozen omdat ze goed passen bij de stijl van mijn
              portfolio. Roboto heb ik gebruikt voor de normale tekst, Roboto
              Condensed voor de titels van de normale tekst en Krona One voor de
              buttons en de grote titels.
            </p>
            <img
              class="h-auto max-w-full rounded-lg mb-5 mt-2"
              src="/images/fontspng.png"
              alt="lettertypes"
            />
          </ContentSection>
          <!--Version control github-->
          <ContentSection
            title="Versie Control Github"
            id="versioncontrolportfolio"
            class="scroll-mt-24"
            subtitle="Learning outcome 2 Development & Version Control"
            description="Ik heb bij mijn portfolio gebruik gemaakt van versie control. Ik heb het programma van git, Github gebruikt. Hierin zijn verschillende versies te zien hoe ik tot stand ben gekomen met het maken van dit portfolio. "
            :loNumber="2"
            pdfLink="https://github.com/LuukyPuuky/Portfolio2.1/commits/main/"
            pdfText="Versie Control Github"
          >
          </ContentSection>

          <!-- Leeruitkomsten Slider -->
          <ContentSection
            title="Leeruitkomsten Slider"
            id="leeruitkomsten"
            class="scroll-mt-24"
            subtitle="Learning outcome 2 Development & Version Control"
            description="De Leeruitkomsten slider die je op de homepagina ziet van deze website heb ik gemaakt door middel van GSAP. Ik heb deze slider gebaseerd op de slider die op de website van Lenis staat."
            :loNumber="2"
          >
            <img
              src="/images/Lenisinspo.png"
              alt="lenis inspiratie"
              class="h-auto max-w-full w-full rounded-lg mb-5"
            />
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl mb-5">
              Ik vond de layout van deze cards ook erg mooi omdat ze precies
              passen bij de leeruitkomsten. Wat er precies gebeurt is dat
              wanneer jij als gebruiker naar beneden scrolt, de slider in een
              horizontale scroll gaat.
            </p>
            <img
              src="/images/leeruitkomsteneigen.png"
              alt="leeruitkomsten"
              class="h-auto max-w-full w-full rounded-lg mb-5"
            />
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl">
              Hieronder is de code te zien hoe ik de scrollanimatie heb gemaakt.
              Dit is gemaakt met GSAP, een animatie library.
            </p>
            <img
              src="/images/codehorizontal.png"
              alt="leeruitkomsten"
              class="h-auto max-w-full w-full rounded-lg mb-5"
            />
          </ContentSection>

          <!-- Projecten Map Slider-->
          <ContentSection
            title="Projecten Map Slider"
            id="mapslider"
            class="scroll-mt-24"
            subtitle="Learning outcome 2 Development & Version Control"
            description="Dit is de tweede slider op de index pagina. Deze slider heb ik gemaakt ter inspiratie van een slider die op de website van wyre.studiofright staat. "
            :loNumber="2"
          >
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl">
              Ik heb deze scrollanimatie deels gemaakt door het bekijken van een
              youtube tutorial. Die maakte namelijk precies wat ik wilde maken
              en idee had om te doen.
            </p>
            <p class="text-gray-300 font-Roboto text-xl max-w-2xl">
              Hieronder is de code te zien hoe ik de scrollanimatie heb gemaakt.
              Dit is ook gemaakt met GSAP.
            </p>
            <img
              src="/images/codevertical.png"
              alt="projecten map slider"
              class="h-auto max-w-full w-full rounded-lg mb-5"
            />
          </ContentSection>

          <!-- Team Roles -->
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

          <!-- 16 Personalities -->
          <ContentSection
            title="16 Personalities"
            id="personal"
            class="scroll-mt-24"
            subtitle="Learning outcome 5 Personal Leadership"
            description="De 16 Personalities test is een test die ik heb gedaan tijdens een workshop van Guido. Hierin ben ik erachter gekomen wat mijn eigen kernwaardes zijn, Welke kernwaardes andere van mij vinden en wat voor persoon ik zelf ben. De test wordt gebruikt om te bepalen wat voor soort persoon ik ben. Hiermee kan je namelijk beter bepalen hoe je ligt met andere mensen binnen de groep. Ook kan je hieruit afleiden wat voor persoon ik ben en wat voor persoon andere mensen binnen de groep zijn."
            pdfLink="/documents/Personalities.pdf"
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
    </div>
    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup>
const products = [
  { text: "Design Proces", to: "/projects/portfolio#designproces" },
  {
    text: "Versie Control Github",
    to: "/projects/portfolio#versioncontrolportfolio",
  },
  { text: "Leeruitkomsten Slider", to: "/projects/portfolio#leeruitkomsten" },
  { text: "Projecten Map Slider", to: "/projects/portfolio#mapslider" },
  { text: "Team Roles", to: "/projects/portfolio#teamroles" },
  { text: "16 Personalities", to: "/projects/portfolio#personal" },
];

// Wireframe images array
const wireframeImages = [
  "/images/wireframe1.png",
  "/images/wireframe2.png",
  "/images/wireframe3.png",
];

// Wireframe slider
const currentWireframeSlide = ref(0);
const wireframeSliderContainer = ref(null);

// Function to go to previous wireframe slide
const prevWireframeSlide = () => {
  currentWireframeSlide.value =
    (currentWireframeSlide.value - 1 + wireframeImages.length) %
    wireframeImages.length;
};

// Function to go to next wireframe slide
const nextWireframeSlide = () => {
  currentWireframeSlide.value =
    (currentWireframeSlide.value + 1) % wireframeImages.length;
};

// Watch for wireframe slide changes to update the transform
watch(currentWireframeSlide, (newValue) => {
  if (wireframeSliderContainer.value) {
    wireframeSliderContainer.value.style.transform = `translateX(-${
      newValue * 100
    }%)`;
  }
});
</script>
