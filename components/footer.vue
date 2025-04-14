<template>
  <div class="border-t border-gray-600"></div>
  <footer
    class="bg-slate-900 text-white py-10 md:px-20 font-KronaOne max-w-7xl mx-auto gap-8"
  >
    <div class="flex flex-col md:flex-row justify-between">
      <!-- Learning Outcomes -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Learning Outcomes</h2>
        <ul class="space-y-3 text-gray-300">
          <li v-for="(item, i) in learningOutcomes" :key="i">
            <NuxtLink
              :to="item.url"
              exact-active-class="footer-link-active"
              class="relative text-lg font-medium w-max text-gray-300 hover:text-white font-Roboto group"
            >
              {{ item.label }}
              <!-- Underline Span  -->
              <span
                class="absolute left-0 top-5 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Projects -->
      <div class="">
        <h2 class="text-xl font-semibold mb-4">Projects</h2>
        <ul class="space-y-3 text-gray-300 font-KronaOne">
          <li v-for="(item, i) in projectLinks" :key="i">
            <NuxtLink
              :to="item.url"
              exact-active-class="footer-link-active"
              class="relative text-lg font-medium w-max text-gray-300 hover:text-white font-Roboto group"
            >
              {{ item.label }}
              <!-- Underline Span  -->
              <span
                class="absolute left-0 top-5 w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Social Icons -->
      <div class="flex items-start gap-6 mt-4 md:mt-0">
        <NuxtLink
          v-for="(item, i) in socialLinks"
          :key="i"
          :to="item.url"
          target="_blank"
          class="relative text-[#00c951] group"
        >
          <component :is="item.icon" class="w-8 h-8" />
          <span
            class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          ></span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin } from "lucide-vue-next";

const learningOutcomes = [
  { label: "Interactive Media Products", url: "/lo1" },
  { label: "Development and Version Control", url: "/lo2" },
  { label: "Iterative Design", url: "/lo3" },
  { label: "Professional Standard", url: "/lo4" },
  { label: "Personal Leadership", url: "/lo5" },
];

const projectLinks = [
  { label: "Branding", url: "/projects/branding" },
  { label: "Create that UX", url: "/projects/cardan" },
  { label: "Development", url: "/projects/development" },
  { label: "Project X", url: "/projects/project-x" },
];

const socialLinks = [
  { icon: Github, url: "https://github.com/LuukyPuuky" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/luuk-steijaert-028702287/",
  },
];
</script>
