<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        Copyright 2026 Lvce Editor
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script needed for footer
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer {
  padding: 3rem 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
  background: var(--bg-tertiary);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.footer-text {
  color: var(--text-tertiary);
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}
</style>
