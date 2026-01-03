<template>
  <section class="features">
    <div class="container">
      <div class="features-header">
        <h2 class="features-title">Powerful Features</h2>
        <p class="features-subtitle">
          Everything you need for modern development
        </p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <h3 class="feature-title">Lightning Fast</h3>
          <p class="feature-description">
            Built for performance with instant startup and smooth editing
            experience. No lag, no delays—just pure speed.
          </p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Extensible</h3>
          <p class="feature-description">
            Customize and extend with plugins to fit your workflow. Build your
            perfect development environment.
          </p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Beautiful UI</h3>
          <p class="feature-description">
            Modern, clean interface designed for focus and productivity.
            Beautiful themes that adapt to your preferences.
          </p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Cross-Platform</h3>
          <p class="feature-description">
            Available on Windows, macOS, and Linux. Your editor, your way, on
            any platform.
          </p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Developer-Focused</h3>
          <p class="feature-description">
            Built by developers, for developers. Every feature is designed with
            your workflow in mind.
          </p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Open Source</h3>
          <p class="feature-description">
            Free and open source. Contribute, customize, and make it your own.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for features component
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features {
  padding: 8rem 0;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.features-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
  transition: color 0.3s ease;
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
  .features-title {
    font-size: 2rem;
  }

  .features-subtitle {
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
