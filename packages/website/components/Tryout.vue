<template>
  <section class="demo">
    <div class="container">
      <div class="demo-content">
        <h2 class="demo-title">Try it out</h2>
        <p class="demo-description">
          Experience Lvce Editor directly in your browser. No installation
          required.
        </p>
        <ViewportIFrame
          src="https://lvce-editor.github.io/theme-atom-one-dark/"
          title="Lvce Editor Demo"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ViewportIFrame from './ViewportIFrame.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.demo {
  padding: 8rem 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.demo-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.demo-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.demo-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.3s ease;
}


@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }

  .demo-description {
    font-size: 1rem;
  }
}
</style>
