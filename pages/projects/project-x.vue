<template>
  <div class="bg-slate-900 text-white">
    <Navbar />
    <HeaderProject title="Project X" subtitle="Blender" />
    <div class="min-h-screen p-4">
      <div class="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10">
          <div class="max-w-2xl mt-8">
            <h1 class="font-RobotoCondensed text-4xl">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl">
              Project X is het maken van een eigen project als laatste opdracht
              binnen mijn semester 2 Media &amp; Design semester 2 opleiding. In
              dit project ga ik mede door onderzoek, design en ontwikkeling
              verschillende Klim grepen designen in blender en deze toepassen op
              mijn portfolio website.
            </p>
          </div>
          <div class="max-w-4xl flex justify-center items-center">
            <img
              src="/images/Blenderlogo.png"
              alt="Blender logo"
              class="size-64 w-full flex justify-center items-center"
            />
          </div>
        </div>
        <!-- Products List Section -->
        <div
          class="flex flex-col md:flex-row mb-22 md:gap-48 gap-10 w-full sm:p-4"
        >
          <div class="max-w-2xl">
            <ProductsList :products="products" />
          </div>
        </div>

        <!-- Content Section -->
        <ContentSection
          id="projectplanX"
          class="scroll-mt-24"
          title="Projectplan"
          subtitle="Learning Outcome 4 Professional Standard"
          description="Om te beginnen met dit project heb ik een projectplan geschreven waarin ik verschillende onderdelen heb beschreven die ik ga uitvoeren."
          pdfLink="/documents/ProjectplanX.pdf"
          pdfText="Projectplan"
          :loNumber="4"
        >
          <p class="text-gray-300 font-Roboto text-xl">
            Zoals het onderzoek naar de verschillende klimgrepen, het design
            proces in Blender en de implementatie op mijn portfolio website.
            Hier staan ze nog even op een rijtje:
          </p>
          <ul
            class="list-disc list-inside text-gray-300 font-Roboto text-xl mb-5 mt-5"
          >
            <li>Doelstelling</li>
            <li>Planning</li>
            <li>Leeruitkomsten</li>
            <li>Deliverables</li>
          </ul>
        </ContentSection>

        <ContentSection
          id="OnderzoekX"
          class="scroll-mt-24"
          title="Onderzoek Proces"
          subtitle="Learning Outcome 1Interactive Media Products"
          description="Ik merk van mezelf dat ik vaak snel afdwaal naar wat ik wil gaan doen. Zodra ik iets zie dat me interesseert, wil ik het zo snel mogelijk toepassen op mijn project of er dieper in duiken. Dit is soms lastig, maar het levert me wel veel waardevolle inzichten op die ik graag in dit project wil gebruiken."
          loNumber="1"
        >
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Daarom ook nu, heb ik al wat inzichten gekregen over hoe ik het wil
            gaan starten. Dit is de fase na mijn project plan dus ik dwaal
            helaas ook weer een beetje af van de originele planning die ik had
            gemaakt.
          </p>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Ik ben er achter gekomen dat ik TresJS moet gaan gebruiken om de 3d
            objecten toe te voegen aan mijn portfolio via het framework Nuxt wat
            ik nu aan het gebruiken ben.
          </p>
        </ContentSection>

        <ContentSection
          id="DesignX"
          class="scroll-mt-24"
          title="Design Proces"
          subtitle="Learning Outcome 2 Design and Development"
          description="Het design proces is een belangrijk onderdeel van dit project. Ik ga verschillende klimgrepen ontwerpen in Blender en deze vervolgens implementeren op mijn portfolio website."
          loNumber="2"
        >
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Ik heb gebruik gemaakt van een youtube video van Coleman Becker. Hij
            had een video gemaakt over hoe je het beste klimgrepen kan maken in
            blender. Hier heb ik uiteindelijk mijn eigen draai aan gegeven op
            basis van verschillende grepen die ik heb gezien in de klimhal.
          </p>
          <div
            class="grid md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-2 gap-4 mb-5"
          >
            <img
              src="/images/monk1.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl h-"
            />
            <img
              src="/images/monk2.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk3.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk4.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk5.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />

            <img
              src="/images/monk6.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk7.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk8.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
            <img
              src="/images/monk9.jpg"
              alt="presentatie cardan"
              class="h-60 w-full object-cover rounded-lg drop-shadow-black drop-shadow-xl"
            />
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Ik kwam er achter dat ik het nog heel lastig vond om blender te
            gebruiken dus heb ik besloten om de meest bekende blender tutorial
            te bekijken en uit te voeren, de Donut tutorial.
          </p>
          <div class="md:h-[500px] md:w-[500px] h-[300px] w-[300px] relative">
            <ClientOnly>
              <ThreeHold model-url="/model/donut.glb" :zoomlevel="20" />
              <template #fallback>
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-white/50 text-sm">Loading 3D...</div>
                </div>
              </template>
            </ClientOnly>
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Je ziet dat de render in deze donut niet helemaal goed is. Ik ben
            ook niet verder gegaan met de tutorial, omdat ik vond dat ik genoeg
            informatie had gekregen om verder te kunnen met de klimgrepen.
          </p>

          <div class="flex gap-2 mb-5">
            <Pdf
              documentLink="https://www.youtube.com/watch?v=4haAdmHqGOw"
              buttonText="Donut tutorial"
            ></Pdf>
            <Pdf
              documentLink="https://www.youtube.com/watch?v=6EFOUUC_9gw"
              buttonText="Klimgrepen tutorial"
            >
            </Pdf>
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Ik ben daarna verder gegaan met het maken van de klimgrepen. Ik heb
            het opgedeeld in 3 verschillende grepen. twee handgrepen en 1
            voetgreep.
          </p>
          <div class="flex gap-10">
            <div class="md:h-[500px] md:w-[500px] h-[300px] w-[300px]">
              <ClientOnly>
                <ThreeHold model-url="/model/hold1.glb" :zoomlevel="20" />
                <template #fallback>
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="text-white/50 text-sm">Loading 3D...</div>
                  </div>
                </template>
              </ClientOnly>
            </div>
            <div class="md:h-[500px] md:w-[500px] h-[300px] w-[300px]">
              <ClientOnly>
                <ThreeHold model-url="/model/hold2.glb" :zoomlevel="20" />
                <template #fallback>
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="text-white/50 text-sm">Loading 3D...</div>
                  </div>
                </template>
              </ClientOnly>
            </div>
            <div class="md:h-[500px] md:w-[500px] h-[300px] w-[300px]">
              <ClientOnly>
                <ThreeHold model-url="/model/hold3.glb" :zoomlevel="20" />
                <template #fallback>
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="text-white/50 text-sm">Loading 3D...</div>
                  </div>
                </template>
              </ClientOnly>
            </div>
          </div>
          <p class="text-gray-300 font-Roboto text-xl mb-5">
            Hier zie je het proces dat ik heb doorlopen. Ik heb er telkens 1
            greep aan toegevoegd.
          </p>
        </ContentSection>
      </div>
    </div>

    <Footer />
    <ScrollToBottom />
  </div>
</template>

<script setup>
const products = [
  { text: "Projectplan", to: "/projects/project-x#projectplanX" },
];
</script>
