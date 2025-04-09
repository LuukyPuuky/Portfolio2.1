<template>
  <div class="scroll-section vertical-section h-screen" ref="scrollSection">
    <div class="wrapper relative w-full h-full overflow-hidden">
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
    subtitle: "Boris Schimidt",
    description:
      "Voor dit project heb ik een branding gemaakt voor Boris Schmidt. Boris studeert aan de Rockacademie. Gedurende 4 weken heb ik samen met mijn groep verschillende producten gemaakt voor Boris. Denk aan een moodboard, stylescape, logo, brandguide en content strategie.",
    buttonText: "Lees Meer",
    buttonLink: "branding",
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
    buttonLink: "cardan",
    brandingTitle: "Create that UX",
    brandingImage: "images/Cardanlogo.svg",
    fileColor: "#654E6F",
  },
  {
    title: "Project 3",
    subtitle: "Portfolio",
    description:
      "Dit project gaat over mijn portfolio. Hierin beschrijf ik hoe ik tot mijn portfolio ben gekomen, wat ik ervoor heb gedesigned en hoe ik mezelf beter ben leren kennen in mijn waardes.",
    buttonText: "Lees Meer",
    buttonLink: "/portfolio",
    brandingTitle: "Luuk Steijaert",
    brandingImage: "",
    fileColor: "#00c951",
  },
];

onMounted(() => {
  // Zorg ervoor dat de ref gekoppeld is aan een element
  if (!scrollSection.value) {
    console.error("scrollSection ref is not assigned to an element.");
    return;
  }
  const section = scrollSection.value;

  // check voor foutmelding indien scrollSection niet gevonden is
  const wrapper = section.querySelector(".wrapper");
  if (!wrapper) {
    console.error(
      "Element with class '.wrapper' not found inside scrollSection."
    );
    return;
  }
  const items = wrapper.querySelectorAll(".item");
  if (!items || items.length === 0) {
    console.warn("No elements with class '.item' found inside .wrapper.");
    return;
  }

  // Roep de specifieke verticale initialisatie functie aan
  initVerticalScroll(section, items);
});

// functie aanroepen
function initVerticalScroll(section, items) {
  // 1. Initiële setup: positioneer items (behalve de eerste) onderaan
  items.forEach((item, index) => {
    if (index !== 0) {
      // Positioneer alle items onder de viewport (100% naar beneden)
      // Dit zorgt ervoor dat ze niet zichtbaar zijn bij de start van de scroll
      gsap.set(item, { yPercent: 100 });
    }
  });

  // Timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: () => `+=${(items.length - 1) * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    defaults: { ease: "none" },
  });

  // Animaties toevoegen aan de timeline
  items.forEach((item, index) => {
    // Animatie voor het HUIDIGE item (wordt kleiner/afgerond)
    timeline.to(item, {
      scale: 0.9,
      borderRadius: "10px",
    });

    // Animeer het VOLGENDE item in beeld (van onder naar positie 0)
    // Controleer of het volgende item bestaat om errors te voorkomen
    if (items[index + 1]) {
      // Alleen de verticale animatie blijft over
      timeline.to(
        items[index + 1],
        {
          yPercent: 0, // Schuift naar de oorspronkelijke verticale positie
        },
        "<" // Start deze animatie tegelijk met de vorige (scale/borderRadius)
      );
    }
  });
}
</script>
