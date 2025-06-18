<script setup>
import { NuxtLink } from "#components";
import { Menu, X } from "lucide-vue-next";

const isOpen = ref(false);
const activeSection = ref("home"); // Default to home
const route = useRoute(); // Get current route

// Navigation items with their corresponding section IDs
const navItems = [
  {
    label: "Learning Outcomes",
    url: "/#learningoutcomes",
    hash: "#learningoutcomes",
    sectionId: "learningoutcomes",
  },
  {
    label: "Projects",
    url: "/#projects",
    hash: "#projects",
    sectionId: "projects",
  },
];

// Function to check which section is currently in view
const updateActiveSection = () => {
  // If we're not on the home page, don't update based on scroll
  if (route.path !== "/") {
    activeSection.value = "none"; // No section active when not on home page
    return;
  }

  const sections = ["learningoutcomes", "projects"];
  const scrollPosition = window.scrollY + 200; // Offset for better detection

  // Check if we're at the top of the page (home section)
  if (window.scrollY < 100) {
    activeSection.value = "home";
    return;
  }

  // Check each section
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;

      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        activeSection.value = sectionId;
        return;
      }
    }
  }
};

// Set up scroll listener and route watcher
onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});

// Watch for route changes to update active state
watch(
  () => route.path,
  () => {
    updateActiveSection();
  },
  { immediate: true }
);

// Function to check if a nav item is active
const isActiveItem = (item) => {
  return activeSection.value === item.sectionId;
};

// Function to check if home/logo is active
const isHomeActive = () => {
  return activeSection.value === "home";
};
</script>

<template>
  <div class="container flex justify-center pt-8 sticky top-0 z-50">
    <nav
      class="relative flex flex-col md:gap-8 md:flex-row items-center rounded-4xl justify-between px-6 py-2 border border-gray-300 dark:border-white/20 backdrop-blur-md bg-transparent top-0 z-50"
      :class="{
        'rounded-4xl': !isOpen,
        'rounded-4xl': isOpen,
      }"
    >
      <!-- Top Section (Logo & Hamburger) -->
      <div class="flex w-full justify-between items-center gap-8">
        <!-- Logo -->
        <NuxtLink href="/" class="relative group">
          <p class="text-lg font-medium font-Roboto text-white">
            Luuk Steijaert
          </p>
          <!-- Home active state - always visible when home is active -->
          <span
            class="absolute left-0 bottom-0.5 w-full h-0.5 bg-purple-400 origin-left transition-transform duration-500 ease-in-out"
            :class="{
              'scale-x-100': isHomeActive(),
              'scale-x-0 group-hover:scale-x-100': !isHomeActive(),
            }"
          ></span>
        </NuxtLink>

        <!-- Hamburger Icon -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <Menu v-if="!isOpen" class="w-8 h-8 text-white cursor-pointer" />
          <X v-else class="w-8 h-8 text-white cursor-pointer" />
        </button>
      </div>

      <!-- Navigation Links -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0 z-50 w-full"
        :class="{ flex: isOpen, hidden: !isOpen, 'md:flex': true }"
      >
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.url"
          class="relative text-lg font-medium w-max text-white hover:text-white font-Roboto group z-50"
        >
          {{ item.label }}
          <!-- Active state - visible when section is active, hover state when not -->
          <span
            class="absolute left-0 bottom-0.5 w-full h-0.5 bg-purple-400 origin-left transition-transform duration-500 ease-in-out"
            :class="{
              'scale-x-100': isActiveItem(item),
              'scale-x-0 group-hover:scale-x-100': !isActiveItem(item),
            }"
          ></span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
