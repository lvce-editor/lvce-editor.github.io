<template>
  <section class="demo">
    <div class="container">
      <div class="demo-content">
        <h2 class="demo-title">Try it out</h2>
        <p class="demo-description">
          Experience Lvce Editor directly in your browser. No installation
          required.
        </p>
        <div class="iframe-wrapper">
          <iframe
            src="https://lvce-editor.github.io/theme-atom-one-dark/"
            class="demo-iframe"
            title="Lvce Editor Demo"
            allow="clipboard-read; clipboard-write"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for tryout component
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

.iframe-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  background: var(--card-bg);
  transition: all 0.3s ease;
}

[data-theme="dark"] .iframe-wrapper {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.demo-iframe {
  width: 100%;
  height: 600px;
  border: none;
  display: block;
  background: var(--bg-primary);
}

@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }

  .demo-description {
    font-size: 1rem;
  }

  .demo-iframe {
    height: 500px;
  }
}
</style>
