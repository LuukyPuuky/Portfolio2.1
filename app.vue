<script>
import Navbar from "./components/Navbar.vue";
import Headerhero from "./components/Headerhero.vue";
</script>
<template>
  <html
    class="scrollbar scrollbar-thumb-green-500 scrollbar-track-[#0F172A]"
  ></html>
  <body class="bg-[#0F172A] text-white">
    <Navbar />
    <Headerhero />
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
