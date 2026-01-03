<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <h1>Lvce Editor</h1>
          </NuxtLink>
        </div>
        <nav class="header-nav">
          <NuxtLink to="/download" class="nav-link">Download</NuxtLink>
          <button
            @click="toggleTheme"
            class="theme-toggle"
            :aria-label="
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            "
          >
            <img
              v-if="theme === 'light'"
              src="/theme-dark-icon.svg"
              alt="Dark mode"
              class="theme-icon"
            />
            <img
              v-else
              src="/theme-light-icon.svg"
              alt="Light mode"
              class="theme-icon"
            />
          </button>
          <a
            href="https://lvce-editor.github.io/blog/"
            class="blog-link"
            aria-label="Blog"
          >
            Blog
          </a>
          <a
            href="https://github.com/lvce-editor/lvce-editor/"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link"
            aria-label="View on GitHub"
          >
            <img src="/github-icon.svg" alt="GitHub" class="github-icon" />
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);
  position: relative;
  background: var(--overlay-bg);
  backdrop-filter: blur(20px);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  font-family: "Inter", sans-serif;
  transition: color 0.3s ease;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9375rem;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.blog-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9375rem;
}

.blog-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.github-link {
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem;
  border-radius: 6px;
}

.github-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.github-icon {
  width: 20px;
  height: 20px;
  transition: opacity 0.2s ease;
  opacity: 0.7;
}

.github-link:hover .github-icon {
  opacity: 1;
}

[data-theme="light"] .github-icon {
  filter: brightness(0);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

.theme-icon {
  width: 20px;
  height: 20px;
  transition: opacity 0.2s ease;
  opacity: 0.7;
}

.theme-toggle:hover .theme-icon {
  opacity: 1;
}

[data-theme="light"] .theme-icon {
  filter: brightness(0);
}
</style>
