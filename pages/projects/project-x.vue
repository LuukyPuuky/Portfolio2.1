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
