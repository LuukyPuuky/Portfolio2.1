<template>
  <div class="min-h-screen p-4">
    <div class="max-w-4xl mx-auto">
      <learning-card
        title="Samenwerkingsovereenkomst"
        subtitle="Learning Outcome 4 Professional Standard"
        description="Voordat we begonnen met het groepsproject heb ik een samenwerkingsovereenkomst gemaakt zodat we regels hadden om ons aan te houden tijdens het werken aan dit project."
        pdf-url="/path/to/pdf1.pdf"
        @pdf-click="openPdf"
      />

      <learning-card
        title="Titel object wat hier gaat staan"
        subtitle="Learning Outcome 4 Professional Standard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae euismod eros, id fringilla metus."
        pdf-url="/path/to/pdf2.pdf"
        @pdf-click="openPdf"
      />

      <learning-card
        title="Onderzoek Boris"
        subtitle="Learning outcome 3: Iterative design"
        description="Als eerste ben ik gaan kijken op het internet naar informatie over Boris zelf via Google. Wat zijn muziek precies is, wat voor soort muziek hij maakt en welke artiesten hij zelf als inspiratie heeft. Daarnaast heeft hij al veel verschillende sociale media platformen om zijn muziek te delen met de wereld, zoals Soundcloud en Spotify. Ook gebruikt hij Tiktok en Instagram om zijn muziek meer aandacht te laten trekken. Hierdoor kreeg ik een beter beeld van zijn muziek. "
        pdf-url="/path/to/pdf3.pdf"
      />
    </div>
  </div>
</template>

<script setup>
const openPdf = ({ pdfUrl }) => {
  if (pdfUrl) {
    window.open(pdfUrl, "_blank");
  }
};
</script>
