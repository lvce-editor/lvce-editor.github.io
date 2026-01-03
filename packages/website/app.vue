<template>
  <div class="app-wrapper">
    <div class="modern-retro-bg">
      <div class="grain-overlay"></div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap");

:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #fafafa;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --text-tertiary: #999999;
  --border-color: rgba(0, 0, 0, 0.1);
  --border-color-hover: rgba(0, 0, 0, 0.15);
  --overlay-bg: rgba(255, 255, 255, 0.8);
  --card-bg: rgba(0, 0, 0, 0.02);
  --card-bg-hover: rgba(0, 0, 0, 0.05);
  --grain-opacity: 0.03;
  --radial-gradient: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.02) 0%,
    transparent 70%
  );
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #151515;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-tertiary: #666666;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-color-hover: rgba(255, 255, 255, 0.2);
  --overlay-bg: rgba(10, 10, 10, 0.8);
  --card-bg: rgba(255, 255, 255, 0.02);
  --card-bg-hover: rgba(255, 255, 255, 0.04);
  --grain-opacity: 0.15;
  --radial-gradient: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 70%
  );
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.app-wrapper {
  min-height: 100vh;
  position: relative;
}

.modern-retro-bg {
  position: relative;
  min-height: 100vh;
  background: var(--bg-primary);
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.modern-retro-bg::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--radial-gradient);
  pointer-events: none;
  z-index: 1;
}

.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: var(--grain-opacity);
  background-image: url("/grain-overlay.svg");
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: overlay;
}
</style>
