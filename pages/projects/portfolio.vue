<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Portfolio" subtitle="Luuk Steijaert" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-2">
          <div class="max-w-2xl mt-8">
            <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl">
              In dit project beschrijf ik wat ik voor proces heb gedaan om tot
              stand te komen voor mijn portfolio. Dit is het portfolio wat je nu
              aan het bekijken bent.
            </p>
          </div>
          <div class="md:h-[400px] md:w-[400px] h-[400px] w-[400px] relative">
            <ClientOnly>
              <ThreeHold model-url="/model/hold3.glb" />
              <template #fallback>
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-white/50 text-sm">Loading 3D...</div>
                </div>
              </template>
            </ClientOnly>
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
              geplaatst en gekeken naar de layouts van mijn portfolio. ik kreeg
              als feedback van Frank om hier naar te kijken omdat ik al een goed
              idee had hoe ik mijn portfolio wilde inrichten.

              <span class="underline decoration-purple-400"
                >De specifieke feedback was:
              </span>
            </p>
            <img
              class="h-auto max-w-full rounded-lg mb-5 mt-2"
              src="/images/feedbacklayouts.png"
              alt="feedback layouts"
            />

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
              Na deze wireframes / layouts heb ik ook gekeken naar hoe het zou
              zijn om de wireframe in de kleuren te hebben die ik wilde gaan
              gebruiken.
            </p>

            <div class="flex justify-center items-center">
              <img
                class="h-auto max-w-full w-1/2 rounded-lg mb-5 mt-2 border"
                src="/images/Kleurwireframe.png"
                alt="lettertypes"
              />
            </div>
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Daarna ben ik gaan kijken naar welke lettertypes ik wilde gaan
              gebruiken in mijn portfolio. Ik had al een lettertype uitgekozen
              voor de wireframes / layouts en dit was Krona One. Alleen was die
              font alleen beschikbaar in 1 gewicht. Dit vond ik niet mooi om
              voor alles te gebruiken omdat ik dan niet genoeg variatie had.
            </p>
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
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Ik ben met mijn werk weer richting Bram gegaan voor feedback en
              hij zei dat ik wat miste qua kleur voor mijn design. Hij gaf als
              tip om
              <span class="underline decoration-purple-400">paars</span> toe te
              voegen als klein accent kleurtje. Dit heb ik toegepast op
              verschillende plekken.
            </p>
            <ul
              class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 mt-5"
            >
              <li>Underline onder feedback</li>
              <li>Accent kleur op de quick down button</li>
              <li>Accent kleur als underline per selector</li>
              <li>Accent kleur op navigatie underline</li>
              <li>Accent kleur op de active button in de footer</li>
            </ul>
            <img
              class="h-auto max-w-full rounded-lg mb-5 mt-2"
              src="/images/feedbackaccentkleur.png"
              alt="accent kleur"
            />

            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              In de wireframes en eerste layouts zie je dat de navigatiebalk er
              nog anders uitzag dan in mijn uiteindelijke portfolio. Naarmate
              het project vorderde, heb ik het ontwerp aangepast.
            </p>
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Zo heb ik de navigatiebalk in het midden geplaatst en een ronding
              aan beide kanten toegevoegd. Daarnaast heb ik gekozen voor een
              glassmorphism-effect, omdat ik dat visueel aantrekkelijk vond en
              het goed paste bij de rest van het ontwerp. Dit kwam ook naar
              voren bij mijn moodboard.
            </p>
          </ContentSection>

          <!-- Feedback & Usertests -->
          <ContentSection
            title="Feedback & Usertests"
            id="feedback"
            class="scroll-mt-24"
            subtitle="Learning outcome 3 Iterative Design"
            description="Tijdens het designproces heb ik op verschillende momenten feedback gekregen. Die feedback heb ik gebruikt om mijn portfolio stap voor stap te verbeteren. Ik heb ook een aantal usertests gedaan om te kijken of alles een beetje logisch en gebruiksvriendelijk werkte. Helaas heb ik deze usertests niet concreet kunnen opschrijven omdat het meer peer-feedback was dat ik in de lessen tijdens het maken van mijn portfolio heb gekregen."
            :loNumber="3"
          >
            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Eén van de dingen die uit de feedback naar voren kwam, was dat de
              leeruitkomsten-blokken eruitzagen als een slider. Mensen dachten
              dat je met de muis van rechts naar links kon swipen, terwijl dat
              eigenlijk niet de bedoeling was. Om die verwarring te voorkomen,
              heb ik bovenaan de pagina een korte uitleg toegevoegd waarin staat
              dat je gewoon naar beneden moet blijven scrollen. Zie plaatje.
            </p>
            <img
              class="h-auto max-w-full mb-5 mt-2 border rounded-xl"
              src="/images/keepscrollingdown.png"
              alt="feedback keepscrolling down"
            />

            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Ook kreeg ik te horen dat de content op de projectpagina's te veel
              naar links stond, waardoor er een grote lege ruimte aan de
              rechterkant ontstond. Dat heb ik opgelost door de content naar het
              midden te verplaatsen. Dat ziet er nu een stuk strakker en
              evenwichtiger uit. Dit was feedback van Mette, Mette zit in
              semester 8 van Media &amp; Design en heeft veel ervaring met het
              maken van websites.
            </p>

            <p class="text-gray-300 text-xl mb-5 font-Roboto">
              Als laatste heb ik zelf ook nog wat dingentjes aangepast die ik
              niet als extra werk wilde toevoegen. Ik had namelijk langere tijd
              een About Me pagina. Deze heb ik verwijderd omdat ik daar niet
              veel focus op wilde leggen en dat het voor dit specifieke
              portfolio niet nodig was.
            </p>
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

          <ContentSection
            title="Toekomstige Plannen"
            id="toekomst"
            class="scroll-mt-24"
            subtitle="Learning outcome 5 Personal Leadership"
            description="Ik ben van plan om voor mijn toekomstige projecten en semesters richting de front-end kant van de ICT te gaan. "
            :loNumber="5"
          >
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ik ga nu semester 3 Front-end Developer doen. Dit past namelijk
              precies bij wat ik zoek voor de komende tijd en ik denk dat ik
              daardoor mijn kennis ga verbreden. Ik ben zelf vooral
              geïntereseerd in animaties op de website. Dit is nu een mega trend
              en denk dat dat de gebruikers ook aantrekt om mooie functionele
              websites te kunnen maken.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Ik ben er wel bewust van dat ik nog veel moet leren en dat ik
              zeker nog aan de start van mijn front-end carrière sta. Maar ik
              ben gemotiveerd om te blijven leren en mezelf te verbeteren. Ik
              wil mezelf verder gaan verdiepen in frameworks zoals Nuxt, Next,
              Svelte en Astro. Ook wil ik meer leren over animaties en hoe ik
              deze kan toepassen in mijn projecten zoals GSAP. Ik ben er van
              overtuigd dat ik met de kennis die ik heb opgedaan in dit semester
              een goede basis heb gelegd voor mijn toekomst als front-end
              developer.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Daarnaast wil ik ook graag dingen gaan leren over databases en
              Back-end zodat als klanten in de toekomst hierom vragen dat ik ook
              weet hoe ik daar mee om moet gaan. Heb nu vooral met Javascript
              gewerkt maar wil ook met Typescript gaan werken en snappen hoe dat
              allemaal werkt. OOk ben ik benieuwd naar authenticatie en hoe dat
              allemaal werkt. Dit is namelijk ook een belangrijk onderdeel van
              het web in het algemeen. Om je gebruikers veilig jou app te kunnen
              gebruiken.
            </p>

            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Om af te ronden: voor dit portfolio heb ik gebruikgemaakt van
              Nuxt, GSAP, ThreeJS en Tailwind. Deze tools en frameworks beschouw
              ik als industriestandaarden, en ik ben blij dat ik er nu al mee
              heb gewerkt of er in ieder geval al wat ervaring mee heb opgedaan.
            </p>
            <p class="text-gray-300 font-Roboto text-xl mb-5">
              Tijdens Career Day merkte ik echter dat bijna elk bedrijf dat op
              zoek is naar stagiairs vooral werkt met Next.js in combinatie met
              React, of met React Native voor mobiele apps. Daarom wil ik me
              volgend semester gaan verdiepen in Next.js. De structuur van dat
              framework lijkt gelukkig veel op die van Nuxt, dus ik verwacht dat
              ik het redelijk snel onder de knie zal krijgen.
            </p>
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
  { text: "Feedback & Usertests", to: "/projects/portfolio#feedback" },
  {
    text: "Versie Control Github",
    to: "/projects/portfolio#versioncontrolportfolio",
  },
  { text: "Leeruitkomsten Slider", to: "/projects/portfolio#leeruitkomsten" },
  { text: "Projecten Map Slider", to: "/projects/portfolio#mapslider" },
  { text: "Team Roles", to: "/projects/portfolio#teamroles" },
  { text: "16 Personalities", to: "/projects/portfolio#personal" },
  { text: "Toekomstige Plannen", to: "/projects/portfolio#toekomst" },
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
