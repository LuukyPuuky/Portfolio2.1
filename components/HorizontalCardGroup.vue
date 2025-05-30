<template>
  <div class="horizontal-scroll-section">
    <div ref="pinContainerRef" :style="{ height: `${scrollHeight}px` }">
      <div
        ref="pinnedElementRef"
        class="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div
          ref="cardsWrapperRef"
          class="flex flex-nowrap w-max items-center h-full px-[5vw] gap-[5vw]"
        >
          <div v-for="(card, index) in cards" :key="index" class="card-item">
            <HorizontalCard
              :number="card.number"
              :title="card.title"
              :buttonLink="card.buttonLink"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronsDown } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";
import HorizontalCard from "./HorizontalCard.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// --- Refs for DOM elements ---
const pinContainerRef = ref(null);
const pinnedElementRef = ref(null);
const cardsWrapperRef = ref(null);
const scrollHeight = ref(0);

// --- Card Data ---
const cards = ref([
  { number: "01", title: "Interactive Media Products", buttonLink: "/lo1" },
  { number: "02", title: "Development & Version Control", buttonLink: "/lo2" },
  { number: "03", title: "Iterative Design", buttonLink: "/lo3" },
  { number: "04", title: "Professional Standard", buttonLink: "/lo4" },
  { number: "05", title: "Personal Leadership", buttonLink: "/lo5" },
]);

let st = null; // Variable to hold the ScrollTrigger instance for cleanup

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Wait for the next tick to ensure elements are rendered and dimensions are available
  nextTick(() => {
    if (!pinContainerRef.value || !cardsWrapperRef.value) {
      console.error("Required elements for GSAP animation not found.");
      return;
    }

    const amountToScroll =
      cardsWrapperRef.value.offsetWidth - window.innerWidth;
    scrollHeight.value = window.innerHeight + amountToScroll;

    st = ScrollTrigger.create({
      trigger: pinContainerRef.value,
      start: "top top",
      end: () => "+=" + amountToScroll,
      pin: pinnedElementRef.value, // Pin the element
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,

      // The animation itself
      animation: gsap.to(cardsWrapperRef.value, {
        x: -amountToScroll,
        ease: "none",
      }),
    });
  });
});

// --- Cleanup ---
onUnmounted(() => {
  // Kill the ScrollTrigger instance to prevent memory leaks
  if (st) {
    st.kill();
    st = null;
  }
});
</script>
