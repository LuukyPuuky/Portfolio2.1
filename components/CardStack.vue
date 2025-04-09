<template>
  <div
    class="w-full max-w-5xl h-[450px] justify-center flex flex-col md:flex-row bg-[#0f172a] rounded-2xl p-6 md:p-10 mx-auto gap-8"
  >
    <!-- Leftside Card -->
    <div class="flex-1 flex flex-col gap-4 min-w-[300px]">
      <h1 class="font-KronaOne md:text-5xl text-4xl w-max">{{ title }}</h1>
      <h2 class="font-KronaOne text-2xl">{{ subtitle }}</h2>
      <p
        class="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-RobotoCondensed"
      >
        {{ description }}
      </p>
      <NuxtLink
        :to="buttonLink"
        class="bg-green-500 text-black cursor-pointer rounded-lg text-1xl font-KronaOne flex justify-center items-center w-max px-10 py-3 mt-auto"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>

    <!-- Rightside Card -->
    <div class="flex flex-col gap-4 basis-1/2 min-w-[320px]">
      <h1
        class="md:text-5xl sm:text-4xl text-3xl font-KronaOne break-words min-w-[250px] md:min-w-[320px]"
      >
        {{ brandingTitle }}
      </h1>
      <div class="w-full flex justify-center items-center">
        <svg
          class="w-full h-auto max-w-full"
          viewBox="0 0 463 301"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0268 58.4342V242.768C25.0268 261.855 41.3403 277.33 61.4643 277.33H401.548C421.671 277.33 437.985 261.855 437.985 242.768V104.518C437.985 85.4292 421.671 69.9551 401.548 69.9551H241.568C231.904 69.9551 222.637 66.3138 215.804 59.832L181.449 27.2462C179.171 25.0856 176.082 23.8717 172.861 23.8717H61.4643C54.7564 23.8717 49.3184 18.7136 49.3184 12.3509C49.3184 5.98819 54.7564 0.830078 61.4643 0.830078H172.861C182.524 0.830078 191.791 4.47135 198.625 10.9532L232.98 43.539C235.257 45.6996 238.346 46.9134 241.568 46.9134H401.548C435.087 46.9134 462.277 72.7037 462.277 104.518V242.768C462.277 274.581 435.087 300.372 401.548 300.372H61.4643C27.9245 300.372 0.735107 274.581 0.735107 242.768V58.4342C0.735107 52.0715 6.17304 46.9134 12.8809 46.9134C19.5888 46.9134 25.0268 52.0715 25.0268 58.4342Z"
            :fill="fileColor"
          />
          <foreignObject x="35" y="60" width="400" height="200">
            <img
              :src="brandingImage"
              class="w-full h-full object-contain px-4"
              alt="Branding Image"
            />
          </foreignObject>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Project 1",
    },
    subtitle: {
      type: String,
      default: "Boris Schmidt",
    },
    description: {
      type: String,
      default:
        "Voor dit project heb ik een branding gemaakt voor Boris Schmidt...",
    },
    buttonText: {
      type: String,
      default: "Lees Meer",
    },
    buttonLink: {
      type: String,
      default: "/",
    },
    brandingTitle: {
      type: String,
      default: "Branding",
    },
    brandingImage: {
      type: String,
      default: "/images/card1folderinside.svg",
    },
    fileColor: {
      type: String,
      default: "#381C22",
    },
  },
};
</script>
