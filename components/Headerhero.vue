<script>
export default {
  name: "Header",
};
</script>
<template>
  <div class="md:max-w-6xl mx-auto pt-20 px-4">
    <div class="relative bg-navy-900 text-white flex flex-col gap-2">
      <h1 class="font-KronaOne md:text-9xl text-6xl">Portfolio</h1>
      <h1 class="font-KronaOne md:text-5xl text-3xl">Luuk Steijaert</h1>
      <p class="font-KronaOne text-gray-300 md:text-1xl">
        Media &amp; Design <br />
        Semester 2
      </p>
    </div>
    <!-- Boulder Holds -->
    <div class="absolute top-0 right-0 h-full w-full pointer-events-none">
      <!-- Boulder Hold 1 (top right) -->
      <img
        src="/images/Boulderhold2.svg"
        alt="Boulder Hold 1"
        class="absolute w-28 h-28 md:w-40 md:h-40 top-[25%] right-[20%] md:right-[13%] transform rotate-45"
      />

      <!-- Boulder Hold 2 (middle right) -->
      <img
        src="/images/Boulderhold1.svg"
        alt="Boulder Hold 2"
        class="absolute w-28 h-28 md:w-40 md:h-40 top-[40%] right-[15%] md:right-[20%]"
      />

      <!-- Boulder Hold 3 (bottom right) -->
      <img
        src="/images/Boulderhold3.svg"
        alt="Boulder Hold 3"
        class="absolute w-24 h-24 md:w-36 md:h-36 top-[70%] right-[5%] md:right-[9%] md:top-[43%] transform -rotate-6"
      />
    </div>
  </div>
</template>
