<template>
  <button
    @click="scrollToBottom"
    class="fixed bottom-8 right-8 bg-purple-400 hover:bg-purple-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
    aria-label="Scroll to bottom"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </button>
</template>

<script setup>
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
</script>
