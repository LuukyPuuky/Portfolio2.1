export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  });
});
