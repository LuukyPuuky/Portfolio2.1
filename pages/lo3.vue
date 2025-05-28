<script setup lang="ts">
import ProductsList from "~/components/ProductsList.vue";

const products = [
  { text: "Stylescapes Boris", to: "/projects/branding#stylescapes" },
  { text: "Logo's Boris", to: "/projects/branding#logo" },
  { text: "Instagram Posts Boris", to: "/projects/branding#instagram" },
  { text: "Linktree Boris", to: "/projects/branding#linktree" },
  { text: "Spotify Boris", to: "/projects/branding#spotify" },
  { text: "Design Proces Cardan", to: "/projects/cardan#designproces" },
  {
    text: "Usertest Designproces Cardan",
    to: "/projects/cardan#UsertestCardanDesign",
  },
  { text: "Design Proces Portfolio", to: "/projects/portfolio#designproces" },
  {
    text: "Feedback & Usertests Portfolio",
    to: "/projects/portfolio#feedback",
  },
];
</script>

<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Iterative Design" />
      <div class="w-full text-white">
        <div class="mx-auto mt-12 max-w-6xl flex flex-col">
          <!-- Reflection Section -->

          <div id="reflection" class="mb-12">
            <h1 class="text-4xl font-bold">Introductie</h1>
            <p class="text-gray-300 font-Roboto text-xl mb-5 max-w-3xl">
              "Je verkent en gebruikt professionele ontwerptools en ontwerpt
              visuele werken op een iteratieve manier."
            </p>
            <h2 class="text-4xl font-bold">Reflectie</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  Dit semester heb ik veel geleerd over Iterative Design. Ik ben
                  er achter gekomen hoe belangrijk het is om usertests te doen
                  voor je eigen portfolio maar ook voor je projecten. Hieruit
                  komen namelijk veel verschillende meningen en deze kunnen
                  allemaal invloed hebben over hoe je het moet maken. Ook hebben
                  deze perspectieve invloed op hoe je sommige dingen kan missen
                  of die je nog niet eerder waren opgevallen.
                </p>
                <p class="text-gray-300 text-xl">
                  Ook heb ik geleerd dat feedback vragen over het proces heel
                  belangrijk is. Hierdoor krijg je namelijk een doorlopend
                  product wat Bram mij heeft verteld. Ik ben van mezelf een
                  perfectionist en hiermee wil ik vaak graag al mijn aandacht
                  zetten op 1 product en deze zo goed mogelijk maken waardoor de
                  verschillende iteraties die daarvoor lopen verloren gaan.
                </p>
                <p class="text-gray-300 text-xl"></p>

                <p class="text-gray-300 text-xl"></p>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300 text-xl">
                  De kennis die ik heb opgedaan in dit semester neem ik mee voor
                  toekomstige projecten die ik ga hebben. Ik geloof dat ik mijn
                  ontwerp skills verder kan ontwikkelen door te blijven werken
                  met de verschillende methodes die ik heb geleerd. Het proces
                  van ontwerpen, testen en verbeteren heeft me niet alleen
                  geholpen om betere eindproducten te maken, maar ook om mijn
                  creatieve en technische vaardigheden te versterken.
                </p>
              </div>
            </div>
          </div>

          <ProductsList :products="products" />
        </div>
      </div>
      <Footer />
      <ScrollToBottom />
    </div>
  </div>
</template>
