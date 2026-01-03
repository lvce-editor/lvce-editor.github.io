<template>
  <div class="landing-page">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <NuxtLink to="/" class="logo-link">
              <h1>Lvce Editor</h1>
            </NuxtLink>
          </div>
          <nav class="header-nav">
            <button
              @click="toggleTheme"
              class="theme-toggle"
              :aria-label="
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
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
              <img
                v-if="theme === 'light'"
                src="/github-icon-light.svg"
                alt="GitHub"
                class="github-icon"
              />
              <img
                v-else
                src="/github-icon-dark.svg"
                alt="GitHub"
                class="github-icon"
              />
            </a>
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h2 class="hero-title">
              A Modern Code Editor
              <span class="accent-text">Built for Developers</span>
            </h2>
            <p class="hero-description">
              Experience a powerful, fast, and extensible code editor designed
              to enhance your development workflow.
            </p>
            <div class="download-section">
              <h3 class="download-title">Download for your platform</h3>
              <div class="download-buttons">
                <a
                  :href="downloadUrls.windows"
                  class="download-button windows"
                  rel="download"
                >
                  <img
                    src="/windows-icon.svg"
                    alt="Windows"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">Windows</span>
                    <span class="button-subtitle">.exe</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.macos"
                  class="download-button macos"
                  rel="download"
                >
                  <img
                    src="/macos-icon.svg"
                    alt="macOS"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">macOS</span>
                    <span class="button-subtitle">.dmg</span>
                  </div>
                </a>
                <a
                  :href="downloadUrls.linux"
                  class="download-button linux"
                  rel="download"
                >
                  <img
                    src="/linux-icon.svg"
                    alt="Linux"
                    class="platform-icon"
                  />
                  <div class="button-content">
                    <span class="button-label">Linux</span>
                    <span class="button-subtitle">.deb</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <h3 class="feature-title">Lightning Fast</h3>
              <p class="feature-description">
                Built for performance with instant startup and smooth editing
                experience.
              </p>
            </div>
            <div class="feature-card">
              <h3 class="feature-title">Extensible</h3>
              <p class="feature-description">
                Customize and extend with plugins to fit your workflow.
              </p>
            </div>
            <div class="feature-card">
              <h3 class="feature-title">Beautiful UI</h3>
              <p class="feature-description">
                Modern, clean interface designed for focus and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p class="footer-text">
          © 2024 Lvce Editor. Open source and built with ❤️
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getAllDownloadUrls } from "~/utils/downloadUrls";

const config = useRuntimeConfig();
const downloadUrls = computed(() =>
  getAllDownloadUrls({
    version: config.public.version,
    releaseUrlBase: config.public.releaseUrlBase,
  }),
);

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

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

[data-theme="dark"] .theme-icon {
  filter: invert(1);
}

.main {
  flex: 1;
}

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

[data-theme="dark"] .platform-icon {
  filter: invert(1);
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
</style>
