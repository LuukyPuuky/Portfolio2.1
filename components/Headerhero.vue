<template>
  <div class="md:max-w-6xl mx-auto pt-20 px-4 h-screen">
    <div class="flex md:flex-row gap-10 flex-col">
      <div class="bg-navy-900 text-white flex flex-col gap-2">
        <h1 class="font-KronaOne md:text-9xl text-6xl md:mx-[-10px] mx-[-4px]">
          Portfolio
        </h1>
        <h1 class="font-KronaOne md:text-5xl text-3xl">Luuk Steijaert</h1>
        <p class="font-KronaOne text-gray-300 md:text-1xl">
          Media &amp; Design <br />
          Semester 2
        </p>
      </div>

      <!-- 3D Model Container - Fixed positioning -->
      <div class="md:h-[500px] md:w-[500px] h-[300px] w-[300px] relative">
        <LazyClientOnly>
          <ThreeHold model-url="/model/hold3.glb" />
          <template #fallback>
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-white/50 text-sm">Loading 3D...</div>
            </div>
          </template>
        </LazyClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup></script>
