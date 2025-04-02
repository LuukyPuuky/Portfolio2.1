<template>
  <div
    class="flex flex-col-2 gap-4 md:flex-row md:gap-8 max-w-6xl mx-auto py-18 px-4"
  >
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>{{ description }}</p>
      <NuxtLink
        to="/"
        class="bg-green-400 text-black px-11 py-3 cursor-pointer rounded-lg font-RobotoCondensed text-1xl"
      >
        Lees Meer
      </NuxtLink>
    </div>

    <h1>{{ projecttitle }}</h1>
    <img src="#" alt="#" />
  </div>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    default: () => [
      {
        title: "Project 1",
        subtitle: "Boris Schmidt",
        description:
          "Voor dit project heb ik een branding gemaakt voor Boris Schmidt. Boris studeert aan de Rockacademie.Gedurende 4 weken heb ik samen met mijn groep verschillende producten gemaakt voor Boris. Denk aan een moodboard, stylescape, logo, brandguide en content strategie.  ",
      },
      {
        title: "Project 1",
        subtitle: "Boris Schmidt",
        description:
          "Voor dit project heb ik een branding gemaakt voor Boris Schmidt. Boris studeert aan de Rockacademie.Gedurende 4 weken heb ik samen met mijn groep verschillende producten gemaakt voor Boris. Denk aan een moodboard, stylescape, logo, brandguide en content strategie.  ",
      },
      {
        title: "Project 1",
        subtitle: "Boris Schmidt",
        description:
          "Voor dit project heb ik een branding gemaakt voor Boris Schmidt. Boris studeert aan de Rockacademie.Gedurende 4 weken heb ik samen met mijn groep verschillende producten gemaakt voor Boris. Denk aan een moodboard, stylescape, logo, brandguide en content strategie.  ",
      },
      {
        title: "Project X",
        subtitle: "Spline",
        description:
          "Dit project is mijn eigen project. Hierin mocht ik zelf gaan exploren wat ik graag wilde gaan doen. Ik heb besloten om mijzelf te verdiepen in Spline. Spline is een tool waarmee je 3D objecten kan maken voor het web.",
      },
    ],
  },
});
</script>

<script></script>
