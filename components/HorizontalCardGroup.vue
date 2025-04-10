<template>
  <div class="horizontal-scroll-section">
    <div ref="pinContainerRef" class="pin-container h-[280vh]">
      <div
        ref="pinnedElementRef"
        class="sticky top-0 h-screen w-full overflow-hidden"
      >
        ->
        <div
          ref="cardsWrapperRef"
          class="flex flex-nowrap w-max items-center h-full px-[5vw] gap-8"
        >
          <div v-for="(card, index) in cards" :key="index" class="card-item">
            <HorizontalCard :number="card.number" :title="card.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HorizontalCard from "./HorizontalCard.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// --- Refs for DOM elements ---
const pinContainerRef = ref(null);
const pinnedElementRef = ref(null);
const cardsWrapperRef = ref(null);

// --- Card Data ---
const cards = ref([
  { number: "01", title: "Interactive Media Products" },
  { number: "02", title: "Development & Version Control" },
  { number: "03", title: "Design" },
  { number: "04", title: "Personal leadership" },
  { number: "05", title: "Professional Standard" },
]);

let st = null; // Variable to hold the ScrollTrigger instance for cleanup

// --- GSAP Animation Setup ---
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

    st = ScrollTrigger.create({
      trigger: pinContainerRef.value,
      start: "top top",
      end: () => "+=" + amountToScroll,
      pin: pinnedElementRef.value, // Pin the inner element containing the cards
      pinSpacing: true, // Add padding to the bottom of the trigger to prevent jump when unpinning
      scrub: 1, // Smoothly link animation progress to scroll progress (1 = 1 second delay)
      invalidateOnRefresh: true, // Recalculate values on viewport resize

      // The animation itself
      animation: gsap.to(cardsWrapperRef.value, {
        x: -amountToScroll, // Move left by the calculated amount
        ease: "none", // Linear easing for direct scroll correlation
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
