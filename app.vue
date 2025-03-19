<script>
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <body class="moving-gradient overflow-hidden">
    <Navbar />
    <div>
      <h1
        class="flex items-center justify-center w-screen h-screen text-white text-4xl"
      >
        Vue.js
      </h1>
    </div>
  </body>
</template>

<style scoped>
.moving-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
