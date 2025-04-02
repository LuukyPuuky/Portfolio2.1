<script setup>
import { NuxtLink } from "#components";
import { Menu, X } from "lucide-vue-next";
const isOpen = ref(false);
</script>

<template>
  <div class="container flex justify-center pt-8 sticky top-0">
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
        <NuxtLink
          href="/"
          class="text-lg font-medium font-Roboto text-gray-500 dark:text-white"
        >
          Luuk Steijaert
        </NuxtLink>

        <!-- Hamburger Icon -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <Menu
            v-if="!isOpen"
            class="w-8 h-8 text-gray-500 dark:text-white cursor-pointer"
          />
          <X
            v-else
            class="w-8 h-8 text-gray-500 dark:text-white cursor-pointer"
          />
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
          class="relative text-lg font-medium w-max text-gray-500 dark:text-white hover:text-white font-Roboto group z-50"
        >
          {{ item.label }}
          <span
            class="absolute left-0 bottom-0.5 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          ></span>
        </NuxtLink>

        <!-- Dark Mode Toggle -->
        <DarkmodeToggle />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navItems: [
        { label: "Learning Outcomes", url: "/learning-outcomes" },
        { label: "Projects", url: "/projects" },
        { label: "About", url: "./about" },
      ],
    };
  },
};
</script>
