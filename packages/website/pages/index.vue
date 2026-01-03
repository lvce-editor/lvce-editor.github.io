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
<<<<<<< Updated upstream

.hero {
  padding: 8rem 0;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.accent-text {
  color: var(--text-secondary);
  display: block;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 0.85em;
  transition: color 0.3s ease;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  line-height: 1.7;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.3s ease;
}

.download-section {
  margin-top: 4rem;
}

.download-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: var(--text-tertiary);
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.download-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  font-family: "Inter", sans-serif;
}

.download-button:hover {
  background: var(--card-bg-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
}

.platform-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  opacity: 0.7;
}

.download-button:hover .platform-icon {
  opacity: 1;
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.button-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.button-subtitle {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin-top: 0.25rem;
  font-family: "JetBrains Mono", monospace;
  transition: color 0.3s ease;
}

.other-platforms-link {
  margin-top: 1.5rem;
  text-align: right;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.other-platforms-text {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  text-decoration: none;
  transition: color 0.2s ease;
  font-family: "Inter", sans-serif;
}

.other-platforms-text:hover {
  color: var(--text-secondary);
  text-decoration: underline;
  text-decoration-color: var(--text-tertiary);
  text-underline-offset: 3px;
}

.features {
  padding: 8rem 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Inter", sans-serif;
}

.feature-card:hover {
  background: var(--card-bg-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .download-buttons {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
=======
>>>>>>> Stashed changes
</style>
