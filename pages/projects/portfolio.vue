<template>
  <div class="scrollbar scrollbar-thumb-green-500 scrollbar-track-slate-900">
    <div class="bg-slate-900 text-white">
      <Navbar />
      <HeaderProject title="Portfolio" subtitle="Luuk Steijaert" />
      <div class="min-h-screen p-4">
        <div class="max-w-6xl mx-auto">
          <div id="teamroles" class="scroll-mt-24">
            <Teamroles />
          </div>
          <div id="personal" class="scroll-mt-24">
            <Personal />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
