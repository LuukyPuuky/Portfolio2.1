<template>
  <div class="scroll-section vertical-section h-screen" ref="scrollSection">
    <div class="wrapper relative w-full h-full overflow-hidden">
      <!-- Loop door de kaarten -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="item absolute inset-0 flex justify-center items-center"
      >
        <CardStack
          :title="card.title"
          :subtitle="card.subtitle"
          :description="card.description"
          :buttonText="card.buttonText"
          :buttonLink="card.buttonLink"
          :brandingTitle="card.brandingTitle"
          :brandingImage="card.brandingImage"
          :fileColor="card.fileColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardStack from "./CardStack.vue";

gsap.registerPlugin(ScrollTrigger);

const scrollSection = ref(null);

const cards = [
  {
    title: "Project 1",
    subtitle: "Boris Schmidt",
    description:
      "Voor dit project heb ik een branding gemaakt voor Boris Schmidt. Boris studeert aan de Rockacademie.Gedurende 4 weken heb ik samen met mijn groep verschillende producten gemaakt voor Boris. Denk aan een moodboard, stylescape, logo, brandguide en content strategie.",
    buttonText: "Lees Meer",
    buttonLink: "/branding",
    brandingTitle: "Branding",
    brandingImage: "/images/card1folderinside.svg",
    fileColor: "#381C22",
  },
  {
    title: "Project 2",
    subtitle: "Cardan",
    description:
      "Voor dit project heb ik samen met mijn groepsgenoten een UX design gemaakt voor Cardan. Cardan is een bedrijf dat zich richt op het verbeteren van de accecibility van websites.",
    buttonText: "Lees Meer",
    buttonLink: "/",
    brandingTitle: "Create that UX",
    brandingImage: "/images/card2.svg",
    fileColor: "#234567",
  },
  {
    title: "Project 3",
    subtitle: "Portfolio",
    description:
      "Dit project gaat over mijn portfolio. Hierin beschrijf ik hoe ik tot mijn portfolio ben gekomen, wat ik ervoor heb gedesigned en hoe ik mezelf beter ben leren kennen in mijn waardes.",
    buttonText: "Lees Meer",
    buttonLink: "/portfolio",
    brandingTitle: "Luuk Steijaert",
    brandingImage: "/images/card2.svg",
    fileColor: "#00c951",
  },
];

onMounted(() => {
  const section = scrollSection.value;
  const wrapper = section.querySelector(".wrapper");
  const items = wrapper.querySelectorAll(".item");

  let direction = "vertical";

  initScroll(section, items, direction);
});

function initScroll(section, items, direction) {
  items.forEach((item, index) => {
    if (index !== 0) {
      direction == "horizontal"
        ? gsap.set(item, { xPercent: 100 })
        : gsap.set(item, { yPercent: 100 });
    }
  });

  //timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: () => `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    defaults: { ease: "none" },
  });

  // Voeg de animaties voor elke item toe aan de timeline
  items.forEach((item, index) => {
    timeline.to(item, {
      scale: 0.9,
      borderRadius: "10px",
    });

    direction == "horizontal"
      ? timeline.to(
          items[index + 1],
          {
            xPercent: 0,
          },
          "<"
        )
      : timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<"
        );
  });
}
</script>
