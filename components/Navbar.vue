<template>
  <div class="container pt-8 sticky top-0">
    <nav
      class="flex items-center justify-between p-4 mx-6 gap-8 border border-white/20 rounded-full backdrop-blur-md bg-transparent sticky top-0 z-50"
    >
      <a href="/" class="text-lg font-medium font-Roboto text-gray-500">
        Luuk Steijaert
      </a>
      <div class="flex gap-8">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.url"
          class="text-lg font-medium text-gray-500 hover:text-amber-300 font-Roboto hover:underline"
        >
          {{ item.label }}
        </a>
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
