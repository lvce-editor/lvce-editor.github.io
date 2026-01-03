<template>
  <div class="landing-page">
    <Header />

    <main class="main">
      <Hero />

      <Tryout />

      <Features />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title:
    "Lvce Editor - A Modern Code Editor Built for Developers | Fast & Extensible",
  meta: [
    {
      name: "description",
      content:
        "Experience a powerful, fast, and extensible code editor designed to enhance your development workflow. Download Lvce Editor for Windows, macOS, or Linux.",
    },
  ],
});
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.main {
  flex: 1;
}
</style>
