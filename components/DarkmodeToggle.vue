<script setup>
import { ref, onMounted } from "vue";
import { Sun, Moon } from "lucide-vue-next";

const isDark = ref(false);

// Toggle Dark Mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Check local storage on mount
onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>
<template>
  <!-- Dark Mode Toggle -->
  <button @click="toggleDarkMode" class="focus:outline-none">
    <Sun v-if="!isDark" class="w-6 h-6 text-gray-500 dark:text-white" />
    <Moon v-else class="w-6 h-6 text-gray-500 dark:text-white" />
  </button>
</template>
