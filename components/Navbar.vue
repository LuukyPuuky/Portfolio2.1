<script setup>
import { ref, onMounted } from "vue";
import { Sun, Moon, Menu, X } from "lucide-vue-next";

import { toggleDarkMode } from "./DarkmodeToggle";
</script>

<template>
  <div class="container flex justify-center pt-8 sticky top-0">
    <nav
      class="relative flex flex-col md:flex-row items-center rounded-4xl justify-between px-6 py-2 border border-gray-300 dark:border-white/20 backdrop-blur-md bg-transparent top-0 z-50"
      :class="{
        'rounded-4xl': !isOpen,
        'rounded-4xl': isOpen,
      }"
    >
      <!-- Top Section (Logo & Hamburger) -->
      <div class="flex w-full justify-between items-center gap-8">
        <!-- Logo -->
        <a
          href="/"
          class="text-lg font-medium font-Roboto text-gray-500 dark:text-white"
        >
          Luuk Steijaert
        </a>

        <!-- Hamburger Icon -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <Menu v-if="!isOpen" class="w-8 h-8 text-gray-500 dark:text-white" />
          <X v-else class="w-8 h-8 text-gray-500 dark:text-white" />
        </button>
      </div>

      <!-- Navigation Links -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0 z-50"
        :class="{ flex: isOpen, hidden: !isOpen, 'md:flex': true }"
      >
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.url"
          class="relative text-lg font-medium text-gray-500 dark:text-white hover:text-white font-Roboto group z-50"
        >
          {{ item.label }}
          <span
            class="absolute left-0 bottom-0.5 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          ></span>
        </a>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="focus:outline-none">
          <Sun v-if="!isDark" class="w-6 h-6 text-gray-500 dark:text-white" />
          <Moon v-else class="w-6 h-6 text-gray-500 dark:text-white" />
        </button>
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
        { label: "About", url: "/about" },
      ],
    };
  },
};
</script>
